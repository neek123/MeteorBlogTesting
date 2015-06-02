Meteor.startup(function () {
    return Meteor.methods({
         //Clears ALL items in collection PlayerVotes
        clearPlayerVotes: function(){
            console.log("Cleared PlayerVotes collection")
            return PlayerVotes.remove({});
        },
        /*
        TODO:
        function to reset all votes to 0.
        Also teaches me to search by userID


        UPDATE:
        WORKS, for each funka awesome
         */
        resetPlayerVotes: function(){
            var list = PlayerVotes.find().fetch();
            //console.log(list);
            _.each(list, function(coll){
              PlayerVotes.update(coll._id, {$set: {score: 0}});
            });
        }
    })
});
