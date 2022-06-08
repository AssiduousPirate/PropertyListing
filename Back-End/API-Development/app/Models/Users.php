<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
    protected $fillable = [
        "Fname", "Lname", "Desination", "Address", "Phone", "Mobile", "Email", "Skype", "Image", "AdditionalInfo"
    ];
}
