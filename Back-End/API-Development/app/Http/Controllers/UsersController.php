<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Users;
class UsersController extends Controller
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
    public function store(Request $request, Users $users)
    {
        $request->validate([
            'Fname' => 'required|string',
            'Lname' => 'required|string',
            'Desination' => 'required|string',
            'Address' => 'required|string',
            'Phone' => 'required|string',
            'Mobile' => 'required|string',
            'Email' => 'required|string',
            'Skype' => 'required|string',
            'Image' => 'required|image|mimes:jpg,png,jpeg|max:5048',
            'AdditionalInfo' => 'required|string',
        ]);
        $users->Fname = $request->Fname;
        $users->Lname = $request->Lname;
        $users->Desination = $request->Desination;
        $users->Address = $request->Address;
        $users->Phone = $request->Phone;
        $users->Mobile = $request->Mobile;
        $users->Email = $request->Email;
        $users->Skype = $request->Skype;
        $users->Image = $request->Image;
        $users->AdditionalInfo = $request->AdditionalInfo;
        $users->save();
        return redirect()->route('create')->with("success", "Users created Successfully");
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
    public function update(Request $request, Users $users)
    {
        $request->validate([
            'Fname' => 'required|string',
            'Lname' => 'required|string',
            'Desination' => 'required|string',
            'Address' => 'required|string',
            'Phone' => 'required|string',
            'Mobile' => 'required|string',
            'Email' => 'required|string',
            'Skype' => 'required|string',
            'Image' => 'required|image|mimes:jpg,png,jpeg|max:5048',
            'AdditionalInfo' => 'required|string',
        ]);
        $users->Fname = $request->Fname;
        $users->Lname = $request->Lname;
        $users->Desination = $request->Desination;
        $users->Address = $request->Address;
        $users->Phone = $request->Phone;
        $users->Mobile = $request->Mobile;
        $users->Email = $request->Email;
        $users->Skype = $request->Skype;
        $users->Image = $request->Image;
        $users->AdditionalInfo = $request->AdditionalInfo;
        $users->update();
        return redirect()->route('update')->with("success", "Users updated Successfully");
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

    public function api(Users $users)
    {
        $array = array();
        foreach ($users as $user) {
            $object = [
                "Id" => $user->id,
                "Fname" => $user->Fname,
                "Lname" => $user->Lname,
                "Desination" => $user->Desination,
                "Address" => $user->Address,
                "Phone" => $user->Phone,
                "Mobile" => $user->Mobile,
                "Email" => $user->Email,
                "Skype" => $user->Skype,
                "Image" => $user->Image,
                "AdditionalInfo" => $user->AdditionalInfo
            ];
            array_push($array, $object);
        }
        return response()->json([$array], 200);
    }
}
