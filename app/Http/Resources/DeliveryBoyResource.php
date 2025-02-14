<?php

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class DeliveryBoyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            "id"                 => $this->id,
            "name"               => $this->name,
            "username"           => $this->username,
            "email"              => $this->email,
            "phone"              => $this->phone === null ? '' : $this->phone,
            "status"             => $this->status,
            "image"              => $this->image,
            "country_code"       => $this->country_code,
            "delivery_zone_id"   => $this->deliveryZone?->id,
            "delivery_zone_name" => $this->deliveryZone?->name,
        ];
    }
}
