/*global console, $ */
(function () {
	'use strict';
	var main, tabClick, thisIsMeDiv, thisIsMeObj;
	thisIsMeObj = [];
	main = $('#ASPAmain');
	console.log('Hello from github');
	tabClick = function (evt) {
		var text;
		evt.preventDefault();
		text = $($(this).parent().children('div')[0]);
		if (text.is(":visible")) {
			text.hide('slow');
		} else {
			$('.hide').hide('slow');
			text.show('slow');
		}
	};

	//Make tabs/set up page
	main = $('#ASPAmain');
	//About us
	$('<div />', {html: '<a href="#" id="tab1">About Us</a><div class= "hide">' +
						'&nbsp;&nbsp;The MSTP is excited to announce the formation of an American Physician Scientists Association (APSA) chapter at UAB! The goals of our APSA chapter are multifaceted, as we aim to address the unique challenges that face physician-scientists during their training and career. Among other things, we will provide members with opportunities for informal networking with UAB faculty, organize career development and volunteering events, and provide a formal organization through which UAB’s future physician-scientists can have an active voice both nationally and among UAB’s scientific community.' +
						'<br />&nbsp;&nbsp;APSA is a national organization that was formed by MD/PhD students to address the needs and unique challenges faced by physician-scientists during their training. The national APSA chapter is run entirely by MD/PhD students from institutions across the country.  The organization advocates for policy changes essential to the continued success of physician-scientists, and the NCI’s recent establishment of an F30 for MD/PhD students is an example of APSA’s influence and frequent success. The association also sponsors events such as conferences and webinars that are developed specifically for aspiring-physician scientists. For more information, please visit the national chapter’s website (<a href=http://www.physicianscientists.org>http://www.physicianscientists.org</a>), which contains useful resources, including forums to network with established physician-scientists from around the country and to get specialty-specific mentorship.' +
						'<br />&nbsp;&nbsp;The UAB MSTP was interested in forming an APSA chapter because the organization has the potential to strengthen our MSTP, to establish a forum for networking with research-oriented SOM students, and to provide additional resources for career development. Excitingly, our chapter already has over 40 members! Our chapter meets monthly, and meetings consist of research presentations and the planning of future APSA-sponsored events tailored to the needs of our members. Most importantly, our organization is meant to be a resource for our members, so please let us know if you have any ideas for APSA-sponsored events in the future! We believe that our UAB APSA chapter will be an extremely valuable organization for our members and our MSTP, so please consider joining!' +
						'<br /><br /><a href="https://github.com/adussaq/ASPA2/raw/master/APSAConstitution_2013_01_10.pdf">Download Constitution</a><br /><br /></div>'}).appendTo(main);
	//Officers
	$('<div />', {html: '<a href="#" id="tab2">Officers</a><div class= "hide">' +
						'&nbsp;&nbsp;<b>President:</b> Travis Hull<br />' +
						'&nbsp;&nbsp;<b>Vice President:</b> Jennifer Stanley<br />' +
						'&nbsp;&nbsp;<b>Secretary:</b> Stephanie Robert<br />' +
						'&nbsp;&nbsp;<b>Treasurer:</b> Alice Weaver<br />' +
						'&nbsp;&nbsp;<b>Webmaster:</b> Alex Dussaq<br />' +
						'&nbsp;&nbsp;<b>SOM Representative:</b> Meredith Hubbard<br />' +
						'&nbsp;&nbsp;<b>Faculty Advisor:</b> Dr. Robin Lorenz<br /><br /></div>'}).appendTo(main);

	//Create this is me/membership section
	$('<div />', {html: '<a href="#" id="tab3">Membership</a><div class= "hide">' +
		'&nbsp;&nbsp;This is not an exhaustive list, instead a list of members who wanted us to know "This is me."<br /><br /><div id=thisIsMe></div><div><br /></div>'}).appendTo(main);
	//Important Links
	$('<div />', {html: '<a href="#" id="tab4">Important Links</a><div class= "hide">&nbsp;&nbsp;<a href="http://www.physicianscientists.org">ASPA National Chapter</a><br /><br /></div>'}).appendTo(main);
	//Contact Us
	$('<div />', {html: '<a href="#" id="tab5">Contact Us</a><div class= "hide">&nbsp;&nbsp;In development<br /><br /></div>'}).appendTo(main);


	//Add some javascript properties to above tabs
	$('.hide').hide();
	$('#tab1').click(tabClick);
	$('#tab2').click(tabClick);
	$('#tab3').click(tabClick);
	$('#tab4').click(tabClick);
	$('#tab5').click(tabClick);

	//create this is me section
	thisIsMeDiv = $('#thisIsMe');

	//Add people to this is me
	thisIsMeObj.push({name: 'Jennifer Stanley', year: 'MSTP GS2', images: ['JStanley_20130109_1.jpg', 'JStanley_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Alice Weaver', year: 'MSTP MS2', images: ['AWeaver_20130109_1.jpg', 'AWeaver_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Mika Gunzman Karlsson', year: 'MSTP GS2', images: ['MGKarlsson_20130109_1.jpg', 'MGKarlsson_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Meredith Hubbard', year: 'MS1', images: ['MHubbard_20130109_1.jpg', 'MHubbard_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Travis Hull', year: 'MSTP GS2', images: ['THull_20130109_1.jpg', 'THull_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Josh Cohen', year: 'MSTP MS2', images: ['JCohen_20130109_1.jpg', 'JCohen_20130109_2.jpg']});

	//Actually create the this is me section
	(function () {
		var i, j, scale;

		scale = 2.5;
		//Sort this is me array
		thisIsMeObj = thisIsMeObj.sort(function (a, b) {
			var aSurname, bSurname;
			aSurname = a.name.split(/\s+/).pop();
			bSurname = b.name.split(/\s+/).pop();
			if (aSurname > bSurname) {
				return 1;
			} else if (aSurname < bSurname) {
				return -1;
			} else if (a.name > b.name) {
				return 1;
			} else {
				return -1;
			}
		});
		//Now that it is sorted, add the actual data
		for (i = 0; i < thisIsMeObj.length; i += 1) {
			//make the html
			$('<div />', {html: "&nbsp;&nbsp;<b>" + thisIsMeObj[i].name + "</b>, " + thisIsMeObj[i].year + ' <a href=# id=slides_' + i + '> This is Me</a><div class="slide" id="slideContent' + i + '"></div>'}).appendTo(thisIsMeDiv);

			//give the hide button something to do.
			$('#slides_' + i).click(function (evt) {
				var text;
				evt.preventDefault();
				text = $($(this).parent().children('div')[0]);
				if (text.is(":visible")) {
					text.hide('slow');
				} else {
					$('.slide').hide('slow');
					text.show('slow');
				}
			});

			//Add the images for this person, hiding all but the first one...
			for (j = 0; j < thisIsMeObj[i].images.length; j += 1) {
				$('<img />', {style: "height:" + 702 / scale + "px;width:" + "height:" + 540 / scale + "px;display: block;margin-left: auto;margin-right: auto", src: 'https://raw.github.com/adussaq/ASPA2/master/thisIsMeImages/' + thisIsMeObj[i].images[j]}).appendTo('#slideContent' + i);
			}

		}
		//Hide everything that was made...
		$('.slide').hide();
	}());
}());













