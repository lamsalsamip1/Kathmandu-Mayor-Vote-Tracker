<style>@media (min-width:992px) {.election-header-ads{margin-top:15px!important;}}</style><!DOCTYPE html><html lang="np"><head><title>नेपाल स्थानीय निर्वाचन २०७४ - निर्वाचन विवरण तथा नतिजा - काठमाण्डौ - काठमाण्डौ</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="स्थानीय निर्वाचन २०७४,स्थानिय चुनाब,चुनाब,Local Elections Nepal, Election Results, Election Results Nepal, Local Election Results Nepal, 2074, Kathmandu - काठमाण्डौ, Election Result of Kathmandu - काठमाण्डौ of pradesh 3,sthaniya chunab "><meta name="description" content="Election Results for Local Level Election held in Nepal Kathmandu - काठमाण्डौ"><meta property="og:image" content="https://assets-cdn.ekantipur.com/images/election/og-image/kathmandu.jpg"/><meta property="og:title" content="स्थानीय निर्वाचन २०७४ - निर्वाचन विवरण तथा नतिजा - काठमाण्डौ - काठमाण्डौ"/><meta property="og:type" content="article"/><meta property="og:url" content="https://localelection2074.ekantipur.com/?pradesh=3&panto=kathmandu&location=267"/><meta property="og:description" content="स्थानीय निर्वाचन २०७४ - निर्वाचन विवरण तथा नतिजा - काठमाण्डौ - काठमाण्डौको ताजा जानकारी"/><script src="https://jcss-election.ekantipur.com/election/js/libs/jquery/jquery-3.1.1.min.js"></script><link href="examples.css" rel="stylesheet" type="text/css"><link rel="stylesheet" href="https://jcss-election.ekantipur.com/election/css/common.v34.css"/><script>changeHtmlLanguage("nep");var ward_no = "वडा संख्या";var total_population = "कुल जनसंख्या";var municipality = "नगरपालिका";var gaupalika = "गाउँपालिका";var district = "जिल्ला";var no_of_metropolitian = "महानगरपालिका";var no_of_submetropolitian = "उप-महानगरपालिका";function getParameterByName(name, url) {if (!url) url = window.location.href;name = name.replace(/[\[\]]/g, "\\$&");var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),results = regex.exec(url);if (!results) return null;if (!results[2]) return '';return decodeURIComponent(results[2].replace(/\+/g, " "));}function changeHtmlLanguage(lang){$('html').attr('lang',lang);}function getNepaliLetter(string){letterArray = string.split('');arrayDay = ['&#2406;','&#2407;','&#2408;','&#2409;','&#2410;','&#2411;','&#2412;','&#2413;','&#2414;','&#2415;'];strNepaliDate="";$.each(letterArray,function(i,c){strNepaliDate +=arrayDay[c];});return strNepaliDate;}function getNumberLanguageText(string){if(string=="0" || string==0){return "-";}if(getParameterByName('lng')!="" && getParameterByName('lng')!="null" && getParameterByName('lng')=="eng"){return string;}else{return getNepaliLetter(string);}}function toEnglish(string){var ret = string.split("/");if(getParameterByName('lng')!="" && getParameterByName('lng')!="null" && getParameterByName('lng')=="eng"){return ret[1];}else{return ret[0];}}</script></head><body class="menubar-hoverable header-fixed "><header id="header"><div class="headerbar"><a href="/"><img src="/img/kantipur.png" alt="Kantipur Media Group" class="img-responsive"></a><a href="/"><span class="text-lg">स्थानीय निर्वाचन २०७४</span></a><div><a class="active" href="/?pradesh=3&panto=kathmandu&location=267&lng=nep">NP</a>|<a href="/?pradesh=3&panto=kathmandu&location=267&lng=eng">EN</a></div></div></header><div id="sub-header"></div><div id="base"><div class="offcanvas"></div><div class="banner"><section class="banner-wrap"><h2>स्थानको आधारमा खोज्नुहोस् </h2><div class="card-body no-padding"><form id="frm_search"><div class="col-xs-12 col-sm-3 col-md-3 form-group"><select id="select_pradesh" name="pradesh" class="form-control" required onchange="loadDistrictJSON(this.value);"><option value="">प्रदेश </option> <optgroup label="तेस्रो चरण"><option value="2" > प्रदेश २</option></optgroup><optgroup label="दोस्रो चरण"><option value="1" > प्रदेश १ </option><option value="5" > प्रदेश ५ </option><option value="7" > प्रदेश ७ </option></optgroup><optgroup label="पहिलो चरण"><option value="3" selected> प्रदेश ३ </option><option value="4" > प्रदेश ४ </option><option value="6" > प्रदेश ६</option></optgroup></select></div><div class="col-xs-12 col-sm-3 col-md-3 form-group"><select id="select_district" name="district" class="form-control" required onchange="loadLocationJSON(this.value);"><option value="">जिल्ला </option>  </select></div><div class="col-xs-12 col-sm-3 col-md-3 form-group"><select id="select_location" name="location" class="form-control" required ><option value=""> नगरपालिका वा गाउँपालिका</option></select></div><div class="col-xs-12 col-sm-3 col-md-3 form-group" ><button type="button" id="search-result" class="btn ink-reaction btn-raised btn-info"><i class="fa fa-search" aria-hidden="true"></i> खोज्‍नुहोस् </button></div></form></div></section></div><script>var jsonData = null;var curLang = getParameterByName('lng') == 'eng' ? 'eng' : 'nep';function loadDistrictJSON(ctrl) {var selected_pradesh = $('#select_pradesh').val();if(selected_pradesh) {populateDistrict(selected_pradesh, 0)}}function populateDistrict(selected_pradesh, selected_district) {if(jsonData){var districtData = jsonData[selected_pradesh];html = '<option attr-name="" value="">जिल्ला</option>';$.each(districtData, function(key, val){var nameByLang = (curLang == 'eng') ? capitalizeFirstLetter(val.english_name) : val.nepali_name;var optionValue = formatDistrictValue(val.english_name);var selectedText = (optionValue == selected_district) ? ' selected ' : '';html += '<option attr-name="'+ optionValue +'" value="' + val.id + '"' + selectedText + '>' + nameByLang + '</option>';});$('#select_district').html(html);}else{$.get('/json_data/alljsondata.json?x=3.0',function(res){jsonData = res;var districtData = jsonData[selected_pradesh];html = '<option attr-name="" value="">जिल्ला</option>';$.each(districtData, function(key, val) {var nameByLang = (curLang == 'eng') ? capitalizeFirstLetter(val.english_name) : val.nepali_name;var optionValue = formatDistrictValue(val.english_name);var selectedText = (optionValue == selected_district) ? ' selected ' : '';html += '<option attr-name="'+ optionValue +'" value="' + val.id + '"' + selectedText + '>' + nameByLang + '</option>';});$('#select_district').html(html);});}}function loadLocationJSON() {var pradesh_id = $('#select_pradesh').val();var district_id = $('#select_district').val();if(pradesh_id && district_id) {populateLocation(pradesh_id, district_id, '');}}function populateLocation(selected_pradesh, selected_district, selected_location) {if(jsonData){localData = jsonData[selected_pradesh][selected_district].locations;html = '<option value="">नगरपालिका वा गाउँपालिका</option>';$.each(localData, function(key, localationArr){$.each(localationArr, function(loc_id, loc_name){var locationByLang = curLang == 'eng' ? capitalizeFirstLetter(loc_name.english_name) : loc_name.nepali_name;var selectedText = (loc_id == selected_location) ? ' selected ' : '';html += '<option value="' + loc_id + '"' + selectedText + '>' + locationByLang + '</option>';});});$('#select_location').html(html);}else{$.get('/json_data/alljsondata.json?x=3.0',function(res){jsonData = res;localData = jsonData[selected_pradesh][selected_district].locations;html = '<option value="">नगरपालिका वा गाउँपालिका</option>';$.each(localData, function(key, localationArr){$.each(localationArr, function(loc_id, loc_name){var locationByLang = curLang == 'eng' ? capitalizeFirstLetter(loc_name.english_name) : loc_name.nepali_name;var selectedText = (loc_id == selected_location) ? ' selected ' : '';html += '<option value="' + loc_id + '"' + selectedText + '>' + locationByLang + '</option>';});});$('#select_location').html(html);});}}function capitalizeFirstLetter(string) {return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();}function formatDistrictValue(str) {var res = str.split("(");var output = res[0].trim();if(res[1]) {output += res[1].replace(/[^0-9]/g, '');}return output;}$(function(){var selected_pradesh = '3';var selected_district = 'kathmandu';var district_id = '27';var selected_location = '267';if(selected_pradesh) {populateDistrict(selected_pradesh, selected_district);if(selected_district) {populateLocation(selected_pradesh, district_id, selected_location);}}$('#search-result').click(function(){if($('#frm_search')[0].checkValidity()==false){$('#frm_search')[0].reportValidity();}else{var pradesh = $("#select_pradesh").val();district = $("#select_district option:selected").attr('attr-name');var local = $("#select_location").val();window.location = "/?pradesh="+pradesh+"&panto="+district+'&location='+local;}}); });</script><div id="content"><section><div class="section-body"><div class="col-md-12"><div class="card-head"><h2 class="level-text"><a href="/?lng=nep">निर्वाचन विवरण</a> <i class="fa fa-angle-right" aria-hidden="true"></i><a href="/?lng=nep&pradesh=3&panto=kathmandu">काठमाण्डौ</a> <i class="fa fa-angle-right" aria-hidden="true"></i> काठमाण्डौ</h2><div class="shareme"><div class="total-share-count numbers"><span class="share-count total"></span> <span class="shares">Shares </span></div><div class="socialise"><a onclick="fbShare('https%3A%2F%2Flocalelection2074.ekantipur.com%2F','काठमाण्डौ महानगरपालिका, काठमाण्डौ - स्थानीय चुनाव २०७४');" class="btn-facebook"><i class="fa fa-facebook"></i><span>Share </span></a><a onclick="twitShare('https%3A%2F%2Flocalelection2074.ekantipur.com%2F','काठमाण्डौ महानगरपालिका, काठमाण्डौ - स्थानीय चुनाव २०७४');" class="btn-twitter"><i class="fa fa-twitter"></i><span>Tweet</span></a></div></div><script>$(function(){loadShareCount("https%3A%2F%2Flocalelection2074.ekantipur.com%2F",function(share){$('.total-share-count .total').html((share));if(share>0){$(".total-share-count").show();}$(".total-share-count .total").removeClass('total');});});</script></div><div class="col-md-12 card mapSection"><div class="col-xs-12 col-sm-12 col-md-12" style="padding:0"><div class="card-head"><h3 class="headline">काठमाण्डौ महानगरपालिका</h3></div><div class="col-xs-12 col-sm-6 col-md-6"><div class="card"><div class="card-body style-default-bright"><h3>मेयर<span class="status-2">(मत गणना समाप्त)</span></h3><div class="result"><div class="col-xs-12 col-sm-3 col-md-3"><img src="https://assets-cdn.ekantipur.com/images/election/party_sign/uml.jpg" class="circle-img"><span><a href="/party?pid=3">एमाले</a></span></div><div class="col-xs-12 col-sm-9 col-md-9"><span id="winner-label">विद्यासुन्दर शाक्य &mdash; </span> <span id="leader-label">&#2412;&#2410;&#2415;&#2407;&#2409; मत <span class="elected">निर्वाचित <i class="fa fa-check"></i></span><div class="progress progress-hairline party-id-3"><div class="progress-bar progress-bar-info" style="width:40.565554305712%"></div><div class="progress-bar progress-bar-success" style="width:%"></div></div></div></div><div class="result"><div class="col-xs-12 col-sm-3 col-md-3"><img src="https://assets-cdn.ekantipur.com/images/election/party_sign/Nepali-Congress.jpg" class="circle-img"><span><a href="/party?pid=1">नेपाली कांग्रेस</a></span></div><div class="col-xs-12 col-sm-9 col-md-9"><span id="winner-label">राजुराज जोशी &mdash; </span> <span id="leader-label">&#2410;&#2411;&#2408;&#2412;&#2415; मत<div class="progress progress-hairline party-id-1"><div class="progress-bar progress-bar-info" style="width:28.2895888014%"></div><div class="progress-bar progress-bar-success" style="width:%"></div></div></div></div></div></div></div><div class="col-xs-12 col-sm-6 col-md-6"><div class="card"><div class="card-body style-default-bright"><h3>उपमेयर <span class="status-2">(मत गणना समाप्त)</span> </h3><div class="result"><div class="col-xs-12 col-sm-3 col-md-3"><img src="https://assets-cdn.ekantipur.com/images/election/party_sign/Nepali-Congress.jpg" class="circle-img"><span><a href="/party?pid=1">नेपाली कांग्रेस</a></span></div><div class="col-xs-12 col-sm-9 col-md-9"><span id="winner-label">हरिप्रभा खड्गी श्रेष्ठ &mdash; </span> <span id="leader-label">&#2411;&#2414;&#2415;&#2411;&#2408; मत <span class="elected">निर्वाचित <i class="fa fa-check"></i></span><div class="progress progress-hairline party-id-1"><div class="progress-bar progress-bar-info" style="width:50.913738902131%"></div><div class="progress-bar progress-bar-success" style="width:%"></div></div></div></div><div class="result"><div class="col-xs-12 col-sm-3 col-md-3"><img src="https://assets-cdn.ekantipur.com/images/election/party_sign/rpp.jpg" class="circle-img"><span><a href="/party?pid=24">राष्ट्रिय प्रजातन्त्र पार्टी</a></span></div><div class="col-xs-12 col-sm-9 col-md-9"><span id="winner-label">राजाराम श्रेष्ठ &mdash; </span> <span id="leader-label">&#2409;&#2410;&#2414;&#2411;&#2410; मत<div class="progress progress-hairline party-id-24"><div class="progress-bar progress-bar-info" style="width:30.101564929008%"></div><div class="progress-bar progress-bar-success" style="width:%"></div></div></div></div></div></div></div><div class="col-xs-12 col-md-12 col-sm-12"><div class="card"><div class="card-body style-default-bright"><div class="col-xs-12 col-md-6 col-sm-6"><div class="mapImage"><img src="https://assets-cdn.ekantipur.com/images/election/og-image/kathmandu.jpg"></div></div><div class="col-xs-12 col-md-6 col-sm-6"><ul><li><strong>कुल जनसंख्या </strong> : &#2415;&#2413;&#2411;&#2410;&#2411;&#2409; </li><li><strong>कुल मतदाता </strong> : &#2408;&#2413;&#2415;&#2409;&#2406;&#2412; </li><li style="display:none"><strong>महिला उम्मेदवार </strong> : &#2409;&#2407;&#2414; </h4><li style="display:none"><strong>पुरुष उम्मेदवार </strong> : &#2411;&#2410;&#2415; </li><li><strong>वडा संख्या </strong> : &#2409;&#2408; </li><li><strong>केन्द्र</strong> : सा. काठमाण्डौं म.न.पा. कार्यालय</li></ul></div></div></div></div></div></div></div><div class="col-xs-12 col-sm-3 col-md-3"></div></div></section></div><script type="text/javascript" src="https://jcss-election.ekantipur.com/election/js/common.v34.js"></script> <script type="text/javascript">function loadDistrict(pradesh_id){ $select = $('#select_district');$lng = "nep";$lng = getParameterByName('lng');var url_send = 'http://election.ekantipur.com/loadJSONDistrict/' + pradesh_id + "/" + $lng;$.ajax({url: url_send,dataType:'JSON',type: "get", success:function(response){$select.html('');$select.append('<option value="">जिल्ला </option>');$.each(response, function(key, val){$select.append('<option value="'+val.id+'" attr-name="' + val.district_name_eng + '">' + val.district_name + '</option>');})},error:function(){$select.html('<option value="-1">Select District</option>');}}); }function loadLocation(district_id,location_id=0){ $select = $('#select_location');var url_send = 'http://election.ekantipur.com/loadJSONLocation/' + district_id + "/" + $lng;$.ajax({url: url_send,dataType:'JSON',type: "get",success:function(data){$select.html('');$select.append('<option value="">नगरपालिका - गाउँपालिका</option>');$.each(data, function(key, val){ if(location_id == val.id){$select.append('<option value="' + val.id + '" selected>' + val.location_name + '</option>');}else{$select.append('<option value="' + val.id + '">' + val.location_name + '</option>');} })},error:function(){$select.html('<option value="-1">Select Location</option>');}});}$(document).ready(function(){$(".navbar-search").addClass('expanded');$('#select_pradesh').css('color','gray');$('#select_pradesh').change(function() {var current = $('#select').val();if (current != 'null') {$('#select_pradesh').css('color','black');} else {$('#select_pradesh').css('color','gray');}}); $('#select_district').css('color','gray');$('#select_district').change(function() {var current = $('#select').val();if (current != 'null') {$('#select_district').css('color','black');} else {$('#select_district').css('color','gray');}}); $('#select_location').css('color','gray');$('#select_location').change(function() {var current = $('#select').val();if (current != 'null') {$('#select_location').css('color','black');} else {$('#select_location').css('color','gray');}}); });function fbShare(url, title) {title = title.replace("&","%26");window.open("http://www.facebook.com/sharer/sharer.php?u=" + url + "&title=" + encodeURIComponent(title), "_blank", "toolbar=no, scrollbars=yes, resizable=yes, top=200, left=500, width=600, height=400");}function twitShare(url, title) {title = title.replace("&","%26");window.open("http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "+" + encodeURIComponent(url), "_blank", "toolbar=no, scrollbars=yes, resizable=yes, top=200, left=500, width=600, height=400");}function loadShareCount(url,callback) {$.get("/getShareCount?q="+url, function (fc) { if (fc >= 1 && fc){if(fc > 1000){fc = fc/1000;fc = fc.toFixed(1)+'K';}callback(fc);}}); }function loadShareCount1(url,callback) {var access_token='';$.get("https://graph.facebook.com/?access_token="+access_token+"&id="+url, function (fc) { if (fc.share.share_count >= 1 && fc.share.share_count){if(fc.share.share_count>1000){fc.share.share_count = fc.share.share_count/1000;fc.share.share_count = fc.share.share_count.toFixed(1)+'K';}callback(fc.share.share_count);}});}</script><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-10805376-29', 'auto');ga('send', 'pageview');function getLanguageTextFormat($language){}</script><div class="disclaimer"><i></i></div></body></html>