<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ListingsController;
Route::group(['namespace' => 'App\Http\Controllers'], function(){
    Route::group(['prefix' => '/'], function(){
        Route::get("/", function() { return view('welcome');});
        Route::get("/User/Create", [UserController::class, 'create'])->name('create');
        Route::put("/User/Update", [UserController::class, 'update'])->name('update');
        Route::post("User/api", [UserController::class, 'api'])->name('api');
        Route::get("/Listings/Create", [ListingsController::class, 'create'])->name('create');
        Route::put("/Listings/Update", [ListingsController::class, 'update'])->name('update');
        Route::get("/Listings/Search", [SearchController::class, 'search'])->name('search');
        Route::post("/Listings/Search/{data}", [SearchController::class, 'api'])->name('api');
    });
});
