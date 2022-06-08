<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Listings;
class ListingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Listings $listings)
    {
        $request->validate([
            "Location" => "Required|string",
            "Type" => "Required|string",
            "Area" => "Required|string",
            "Status" => "Required|string",
            "Beds" => "Required|string",
            "Baths" => "Required|string",
            "Garage" => "Required|string",
            "Price" => "Required|string",
            "Amenities" => "Required|string",
            "Photo" => "Required|image|mimes:jpg,png,jpeg|max:5048",
            "Video" => "Required|string",
            "AdditionalInfo" => "Required|string",
        ]);
        $listings->Location = $request->Location;
        $listings->Type = $request->Type;
        $listings->Area = $request->Area;
        $listings->Status = $request->Status;
        $listings->Beds = $request->Beds;
        $listings->Baths = $request->Baths;
        $listings->Garage = $request->Garage;
        $listings->Price = $request->Price;
        $listings->Amenities = $request->Amenities;
        $listings->Photo = $request->Photo;
        $listings->Video = $request->video;
        $listings->AdditionalInfo = $request->AdditionalInfo;
        $listings->save();
        return redirect()->route("create")->with("success", "Listing Created Successfully");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Listings $listings)
    {
        $request->validate([
            "Location" => "Required|string",
            "Type" => "Required|string",
            "Area" => "Required|string",
            "Status" => "Required|string",
            "Beds" => "Required|string",
            "Baths" => "Required|string",
            "Garage" => "Required|string",
            "Price" => "Required|string",
            "Amenities" => "Required|string",
            "Photo" => "Required|image|mimes:jpg,png,jpeg|max:5048",
            "Video" => "Required|string",
            "AdditionalInfo" => "Required|string",
        ]);
        $listings->Location = $request->Location;
        $listings->Type = $request->Type;
        $listings->Area = $request->Area;
        $listings->Status = $request->Status;
        $listings->Beds = $request->Beds;
        $listings->Baths = $request->Baths;
        $listings->Garage = $request->Garage;
        $listings->Price = $request->Price;
        $listings->Amenities = $request->Amenities;
        $listings->Photo = $request->Photo;
        $listings->Video = $request->video;
        $listings->AdditionalInfo = $request->AdditionalInfo;
        $listings->update();
        return redirect()->route("create")->with("success", "Listing Updated Successfully");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
