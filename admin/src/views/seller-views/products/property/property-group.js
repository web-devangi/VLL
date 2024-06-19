import React, { useEffect, useState, useContext } from 'react';
import { Button, Card, Space, Table } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchSellerPropertyGroups } from 'redux/slices/propertyGroup';
import { disableRefetch, setMenuData } from 'redux/slices/menu';
import PropertyGroupModal from './property-group-modal';
import DeleteButton from 'components/delete-button';
import PropertyGroupShowModal from './property-group-show-modal';
import FilterColumns from 'components/filter-column';
import CustomModal from 'components/modal';
import { Context } from 'context/context';
import useDidUpdate from 'helpers/useDidUpdate';
import propertyService from 'services/seller/property';

export default function SellerPropertyGroup() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { setIsModalVisible } = useContext(Context);
  const { activeMenu } = useSelector((state) => state.menu, shallowEqual);
  const { propertyGroups, loading, meta } = useSelector(
    (state) => state.propertyGroup,
    shallowEqual
  );

  const [id, setId] = useState(null);
  const [show, setShow] = useState(null);
  const [modal, setModal] = useState(null);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [text, setText] = useState(null);

  const data = activeMenu.data;
  const paramsData = {
    search: data?.search,
    column: data?.column,
    perPage: data?.perPage,
    sort: data?.sort,
    page: data?.page,
  };

  const [columns, setColumns] = useState([
    {
      title: t('id'),
      dataIndex: 'id',
      key: 'id',
      is_show: true,
    },
    {
      title: t('title'),
      dataIndex: 'translation',
      key: 'translation',
      is_show: true,
      render: (translation) => translation?.title,
    },
    {
      title: t('type'),
      dataIndex: 'type',
      key: 'type',
      is_show: true,
    },
    {
      title: t('options'),
      is_show: true,
      render: (record, row) => (
        <Space>
          <Button
            type='primary'
            icon={<EyeOutlined />}
            onClick={() => setShow(record.id)}
          />
          <Button
            type='primary'
            icon={<EditOutlined />}
            onClick={() => setModal(record)}
            disabled={!row?.shop}
          />
          <DeleteButton
            type='primary'
            danger
            icon={<DeleteOutlined />}
            onClick={() => {
              setIsModalVisible(true);
              setId([record.id]);
              setText(true);
            }}
            disabled={!row?.shop}
          />
        </Space>
      ),
    },
  ]);

  const handleCancel = () => {
    setShow(null);
    setModal(null);
  };

  const onDeleteExtra = () => {
    setLoadingBtn(true);
    const params = {
      ...Object.assign(
        {},
        ...id.map((item, index) => ({
          [`ids[${index}]`]: item,
        }))
      ),
    };
    propertyService
      .deleteGroup(params)
      .then(() => {
        setIsModalVisible(false);
        toast.success(t('successfully.deleted'));
        setId(null);
        dispatch(fetchSellerPropertyGroups());
      })
      .finally(() => setLoadingBtn(false));
  };

  useDidUpdate(() => {
    dispatch(fetchSellerPropertyGroups(paramsData));
  }, [activeMenu.data]);

  useEffect(() => {
    if (activeMenu.refetch) {
      dispatch(fetchSellerPropertyGroups(paramsData));
      dispatch(disableRefetch(activeMenu));
    }
  }, [activeMenu.refetch]);

  const rowSelection = {
    selectedRowKeys: id,
    onChange: (key) => {
      setId(key);
    },
  };

  const allDelete = () => {
    if (id === null || id.length === 0) {
      toast.warning(t('select.the.product'));
    } else {
      setIsModalVisible(true);
      setText(false);
    }
  };

  const handleFilter = (item, name) => {
    dispatch(
      setMenuData({
        activeMenu,
        data: { ...activeMenu.data, [name]: item },
      })
    );
  };

  function onChangePagination(pagination, filter, sorter) {
    const { pageSize: perPage, current: page } = pagination;
    const { field: column } = sorter;
    dispatch(
      setMenuData({
        activeMenu,
        data: { ...activeMenu.data, perPage, page, column },
      })
    );
  }

  return (
    <Card
      title={t('property.group')}
      extra={
        <Space wrap>
          <Button
            type='primary'
            icon={<PlusCircleOutlined />}
            onClick={() => setModal({})}
          >
            {t('add.property')}
          </Button>
          <DeleteButton size='' onClick={allDelete}>
            {t('delete.selected')}
          </DeleteButton>

          <FilterColumns columns={columns} setColumns={setColumns} />
        </Space>
      }
    >
      <Table
        scroll={{ x: true }}
        rowSelection={rowSelection}
        loading={loading}
        columns={columns?.filter((item) => item.is_show)}
        dataSource={propertyGroups}
        rowKey={(record) => record.id}
        pagination={{
          pageSize: paramsData.perPage,
          page: activeMenu.data?.page || 1,
          total: meta.total,
          defaultCurrent: activeMenu.data?.page,
          current: activeMenu.data?.page,
        }}
        onChange={onChangePagination}
      />
      {modal && (
        <PropertyGroupModal modal={modal} handleCancel={handleCancel} />
      )}
      <CustomModal
        click={onDeleteExtra}
        text={text ? t('delete') : t('all.delete')}
        loading={loadingBtn}
        setText={setId}
      />
      {show && (
        <PropertyGroupShowModal open={show} handleClose={handleCancel} />
      )}
    </Card>
  );
}
