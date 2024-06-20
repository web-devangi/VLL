<?php
declare(strict_types=1);

namespace App\Http\Requests\WarehouseWorkingDay;

use App\Http\Requests\BaseRequest;
use App\Models\WarehouseWorkingDay;
use Illuminate\Validation\Rule;

class StoreRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'warehouse_id' => [
                'required',
                'integer',
                Rule::exists('warehouses', 'id')
            ],
            'dates'             => 'array|max:7',
            'dates.*.from'      => 'required|string|min:1|max:5|date_format:H:i',
            'dates.*.to'        => 'required|string|min:1|max:5|date_format:H:i',
            'dates.*.disabled'  => 'boolean',
            'dates.*.day'       => ['required', Rule::in(WarehouseWorkingDay::DAYS)],
        ];
    }
}
