<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Listings extends Model
{
    use HasFactory;
    protected $fillable = [
        'Location', 'Type', 'Area', 'Status', 'Beds', 'Baths', 'Garage', 'Price', 'Amenities', 'Photo', 'Video', 'AdditionalInfo'
    ];
}
