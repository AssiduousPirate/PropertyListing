<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Listings', function (Blueprint $table) {
            $table->id();
            $table->string('Location');
            $table->string('Type');
            $table->string('Area');
            $table->string('Status');
            $table->string('Beds');
            $table->string('Baths');
            $table->string('Garage');
            $table->string('Price');
            $table->string('Amenities');
            $table->string('Photo');
            $table->string('Video');
            $table->string('AdditionalInfo');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Listings');
    }
};
