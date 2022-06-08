<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Listings;
class SearchController extends Controller
{
    public function search(Request $request, Listings $listings)
    {
        $conditions = [
            "Desination" => $request->Keyword,
            "Type" => $request->Type,
            "Address" => $request->City,
            "Beds" => $request->Beds,
            "Baths" => $request->Baths,
            "Garage" => $request->Garage,
            "Price" => $request->Price
        ];
        $conditionEmplimention = Listings::where($conditions, "like", "%{$listings}%");
        return Response()->json([$conditionEmplimention], 200);
    }
    public function api(Request $request, Listings $listings)
    {
        $array = array();
        $object = [
            "Location" => $listings->Location,
            "Type" => $listings->Type,
            "Area" => $listings->Area,
            "Status" => $listings->Status,
            "Beds" => $listings->Beds,
            "Baths" => $listings->Baths,
            "Garage" => $listings->Garage,
            "Price" => $listings->Price,
            "Amenities" => $listings->Amenities,
            "Photo" => $listings->Photo,
            "Video" => $listings->Video,
            "AdditionalInfo" => $Listings->AdditionalInfo
        ];
        array_push($array, $object);
    }
    return Response()->json([$array], 200);
}
