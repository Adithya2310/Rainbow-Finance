import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

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
    public query func getTicker():async Text{
        return ticker;
    };

    public shared(msg) func payOut():async Text{
        if(balances.get(msg.caller)==null){
            Debug.print(debug_show(msg.caller));
            let result=await transfer(msg.caller,10000);
            if(result=="Insufficent funds"){
                return result;
            }
            else
            return "sucessfully claimed";
        }
        else{
            return "sorry seems you have already claimed it";
        }
    };

    public shared(msg) func transfer(toID: Principal,amount: Nat): async Text{
        Debug.print(debug_show(msg.caller));
        let fromBalance=await balanceOf(msg.caller);
        if(fromBalance > amount){
            var newBalance: Nat=fromBalance-amount;
            balances.put(msg.caller,newBalance);
            let toBalance=await balanceOf(toID);
            newBalance:=toBalance+amount;
            balances.put(toID,newBalance);
            return "Transaction completed";
        }
        else{
            return "Insufficent funds";
        }
    }

}