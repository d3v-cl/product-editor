/**
 * Created by david on 12/22/15.
 */

$(document).on('click','#tag_group_new_create',function(e) {
    e.preventDefault();

    var taggroup = {
        muid:   $('#tag_group_new_muid').val(),
        name:   $('#tag_group_new_name').val()
    };

    $.ajax({ type:"POST", url: "/?taggroup=create", data:taggroup, success: function(result){

        var dec = JSON.parse(result);

        // success
        if(dec["id"]>0) {
            $('#message_container').html('<div class="umsg success">New Tag group successfully created.</div>');
            $('#tag_group_new_muid,#tag_group_new_name').val('');
            taggroups.push(dec);
            taggroup_labels.push({label: dec["name"]+" ("+dec["muid"]+")",value: dec["id"]});

        } else {
            $('#message_container').html('<div class="umsg error">'+dec["error"]+'</div>');
        }
    }});
});


$(document).on('click','#tag_group_delete',function(e) {
    e.preventDefault();

    var delid = $('#tag_group_delete_selected_id').val();

    $.ajax({ type:"GET", url: "/?taggroup=delete&id="+delid, success: function(result){
        if(result=="success") {

            // remove tag group from selectors
            for(var i = taggroups.length-1; i>=0;i--) {
                console.log(taggroups[i]);
                if(taggroups[i]["id"] == delid){
                    taggroups.splice(i, 1);
                    taggroup_labels.splice(i,1); // order should be the same
                    $('#tag_group_delete_selector').val('');
                    $('#tag_group_delete_selected_id').val('0');
                    break;
                }
            }

            $('#message_container').html('<div class="umsg success">Tag group successfully deleted.</div>');

        } else {
            var dec = JSON.parse(result);
            $('#message_container').html('<div class="umsg error">'+dec["error"]+'</div>');
        }
    }});
});



$(document).on('click','#tag_new_create',function(e) {
    e.preventDefault();

    var tag = {
        taggroup:   $('#tag_group_selected_id').val(),
        muid:   $('#tag_uid_new').val(),
        name_de:   $('#tag_name_new').val(),
        name_at:   $('#tag_name_at_new').val(),
        numerical_value: $('#tag_numerical_new').val(),
        numerical_value_type: $('#tag_numerical_new_type').val()
    };

    $.ajax({ type:"POST", url: "/?sealetc=create", data:tag, success: function(result){

        var dec = JSON.parse(result);

        // success
        if(dec["id"]>0) {
            $('#message_container').html('<div class="umsg success">New Tag successfully created.</div>');
            $('#tag_group_new_muid,#tag_group_new_name').val('');


        } else {
            $('#message_container').html('<div class="umsg error">'+dec["error"]+'</div>');
        }
    }});

});