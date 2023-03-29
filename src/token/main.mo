import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

actor Token{
    let owner:Principal=Principal.fromText("4l2dl-lhul4-huo4k-sf7n4-244vd-nncls-xw3fb-65bbx-igpyn-h6pur-qae");
    let ticker:Text="RAIN";
    var totalSupply:Nat=40000000;

    //creating a hashmap for balances

    var balances=HashMap.HashMap<Principal,Nat>(1,Principal.equal,Principal.hash);

    //A function to Query the balance of a user
    balances.put(owner,totalSupply);
    public query func balanceOf(user:Principal):async Nat{
        let balance: Nat =switch(balances.get(user)){
            case null 0;
            case (?result) result;
        };
        return balance;
        // if(balances.get(user)!=null){
        //     return 0;
        // }
        // else{
        //     return balances.get(user);
        // }wont work due to the optional
    }; 

}