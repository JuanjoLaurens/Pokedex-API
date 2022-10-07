<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{

    function register(Request $request)
    {

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make(($request->password));
        $user->save();

        return $$user;
    }


    function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password))
        {
            return ["ERROR" => "credentials wrong"];
        }

        return $user;
    }

    function list(){
        return User::all();
    }

    function getUser($id){

        return User::find($id);
    }
    
    function edit($id){
        $User = User::find($id);
        return $User;
    }
    function update($id, Request $request){


        $request ->validate([
            'name' =>'|string|max:255',
            'email' =>'|string|email|max:255|unique:users',
            'address' =>'|string|address|max:255|',
            'birthdate' =>'|string|date|max:255|',
            'city' =>'|string|city|max:255|'
            
        ]);

        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->address = $request->address;
        $user->birthdate = $request->birthdate;
        $user->city = $request->city;
        $user->save();

        return $user;


    }
}

