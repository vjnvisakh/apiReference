
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings
({
    timestampsInSnapshots: true
});

db.collection("tt").get().then((querySnapshot) =>
{
    console.log(querySnapshot);

    querySnapshot.forEach((doc) =>
    {
        loadDom(doc.data());
    });
});

function loadDom(apiData)
{
    let title = apiData.title;
    let desc = apiData.description;
    let url = apiData.endPoint;
    let params = apiData.params;
    let successResponse = apiData.onSuccess;
    let failureResponse = apiData.onFailure;
    
    let apiContent = '<div class="card"><div class="card-header"><a class="card-link" data-toggle="collapse" href="#collapseOne">';
    apiContent += title + '</a>';
    apiContent += '</div><div id="collapseOne" class="collapse show" data-parent="#accordion"><div class="card-body">';
    apiContent += '<p><b>Description</b><br />' + desc;
    apiContent += '<p><b>Endpoint</b><br />' + url;
    apiContent += '<p><b>Params</b><br />' + params;    
    apiContent += '<p><b>On Success</b><br />' + successResponse;    
    apiContent += '<p><b>On Failure</b><br />' + failureResponse;    
    apiContent += '</div></div></div>';

    $("#accordion").append(apiContent);
}

function addApi()
{
    let title = $("#title").val();
    let desc = $("#description").val();
    let url = $("#endPoint").val();
    let params = $("#params").val();
    let successResponse = $("#onSuccess").val();
    let failureResponse = $("#onFailure").val();

    db.collection("tt").add
    ({
        title: title,
        description: desc,
        endPoint: url,
        params: params,
        onSuccess: successResponse,
        onFailure: failureResponse
        
    }).then(function (docRef)
    {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error)
    {
            console.error("Error adding document: ", error);
    });    
}
