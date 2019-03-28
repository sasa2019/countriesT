var data = {
    inputs: {}
}

var url = "https://restcountries.eu/rest/v2/all";

$(function () {

    $("#getOne").click(function () {
        console.log("get")
        getOne();
    });
});    $("#getAll").click(function () {
    console.log("all")
    getAll();
});

    function getAll() {
        var url = "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;topLevelDomain";
 const cb = function (xhr) {
                let countries = JSON.parse(xhr.responseText);
                //$("#countryList").text(xhr.responseText);
                let html = '';
                for (let i in countries) {
                    let country = countries[i];
                    html += '<span><b>Country Name: ' + country.name + '</b></span><br/>'
                    html += '<br/>'
                    html += '<span><b>Capital: ' + country.capital + '</b></span><br/>'
                    html += '<br/>'
                    html += '<span><b>Currency: ' + country.currencies[0].name + '<b></span><br/>'
                    html += '<br/>'
                    html += '<span><b>Currency Symbol: ' + country.currencies[0].symbol + '<b></span><br/>'
                    html += '<br/>'
                    html += '<span><b>Top Domain: ' + country.topLevelDomain + '</b></span><br/>'
                    html += '<br/>'
                    html += '<img src=' + country.flag + ' height="150" width=200" align="center"/><br/>'
                    html += '<br/>'
                    html += '<hr><hr><br/>'
                }
                $("#countryList").html(html);
            }
  ajaxFetch('GET', url, cb);

          }

          function getOne() {
            var url = "https://restcountries.eu/rest/v2/name/"+$("#countryName").val()+"?fields=name;capital;currencies;flag;topLevelDomain";
            const cb = function (xhr) {
                       allCountries = JSON.parse(xhr.responseText);
                           //$("#countryList").text(xhr.responseText )
                           let html = '';
                    let state = allCountries[0];
                    html += '<span><b>Country Name: ' + state.name + '</b></span><br/>'
                    html += '<br/>'
                    html += '<span><b>Capital: ' + state.capital + '</b></span><br/>'
                    html += '<br/>'
                    html += '<span><b>Currency: ' + state.currencies[0].name + '<b></span><br/>'
                    html += '<br/>'
                    html += '<span><b>Currency Symbol: ' + state.currencies[0].symbol + '<b></span><br/>'
                    html += '<br/>'
                    html += '<span><b>Top Domain: ' + state.topLevelDomain + '</b></span><br/>'
                    html += '<br/>'
                    html += '<img src=' + state.flag + ' height="80" width="100" align="center"/><br/>'
                    html += '<br/>'
                    html += '<hr><hr><br/>'
        
                $("#countryList").html(html);
                       }
                      // url += $("#countryName").val()+"?fields=name;capital;currencies;flag;topLevelDomain";
                       
             ajaxFetch('GET', url, cb);
           
                     }
           
                function ajaxFetch(method, url, cb, options = null) {
                    let data = null;
   //                let ct = "plain/text";
                    if (options !== null) {
                        if (options.header) {
                            xhr.setRequestHeader(options.header.key , options.header.value);
                          //  ct = options.header.value;
                            data = options.data;
                        }
                    }
    
                    const jqueryParameters = {}
                    jqueryParameters.method = method;
                    jqueryParameters.url = url;
           //         jqueryParameters.contentType = ct;
                    jqueryParameters.data = data;
                
                    $.ajax(jqueryParameters)
                        .done(function (result, status, xhr) {
                            cb(xhr)
                        })
                        .fail( function (xhr, status, error) {
                            console.log("Error!!!", error)
                        }  )
                    }
                