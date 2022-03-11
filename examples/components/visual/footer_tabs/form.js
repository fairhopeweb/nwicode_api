  /**
   * This script need
   */

/*
 function required! this function run component form init
 */
function component_init_form(form_data,component_data,page_data) {
	console.log("default_footer component_init_form fired!");
	console.log("form_data:");
	console.log(form_data);
	console.log("component_data:");
	console.log(component_data);
	console.log("page_data:");
	console.log(page_data);


}


/*
 *** function required! this function run after every changes and run after first open component form
 */
function component_data_changed(form_data,component_data,page_data) {
	console.log("default_footer component_data_changed fired!");
	console.log("form_data:");
	console.log(form_data);
	console.log("component_data:");
	console.log(component_data);
	console.log("page_data:");
	console.log(page_data);


}



/*
 *** function required! this function run after selected color in color dialog
 */
function color_selected(button, color_result) {

	if (!jQuery.isEmptyObject(color_result)) {
		console.log("default_footer color_selected fired!");
		console.log("button");
		console.log(button);
		console.log("color_result");
		console.log(color_result);

		//if background-color-button clicked
		if (button.id=="background-color-button") {
			$("#background-color-block .color-block").css('background-color', color_result.color_value);
			$("#background-color-block input[name='background_color']").val(color_result.color_name);
		}


		//if text-color-button clicked
		if (button.id=="text-color-button") {
			$("#background-color-block .text-color-block").css('color', color_result.color_value);
			$("#background-color-block input[name='text_color']").val(color_result.color_name);
		}

		for (let i = 0; i < 6; i++) {
			if (button.id=="buttons_"+i+"_icon_color_button") {
				$("#buttons_"+i+"_icon_2").css('color', color_result.color_value);
				$("#buttons_"+i+"_icon_color").val(color_result.color_name);
				$("#buttons_"+i+"_icon_color_value").val(color_result.color_value);
			}

		}		

	}
}

/*
 *** function required! this function run after selected icon in icon dialog
 */
function icon_selected(button, icon_result) {

		if (!jQuery.isEmptyObject(icon_result)) {
		console.log("default_footer icon_selected fired!");
		console.log("button");
		console.log(button);
		console.log("icon_result");
		console.log(icon_result);

		for (let i = 0; i < 6; i++) {
			if (button.id=="buttons_"+i+"_icon_button") {
				$("#buttons_"+i+"_icon").val(icon_result);
				$("#buttons_"+i+"_icon_2").attr("name",icon_result);
			}			
		}
	}
}

/*
 *** function required! this function run after entered text in text dialog
 */
function strings_inputted(button, result) {

	if (!jQuery.isEmptyObject(result)) {
		console.log("default_footer texts_inputted fired!");
		console.log("button");
		console.log(button);
		console.log("result");
		console.log(result);

		if (button.id=="title-button") {
			for (let lng in result) {
				$("input[name='TRANSLATIONS["+lng+"][FOOTER_TITLE]']").val(result[lng]);
				$("#TRANSLATIONS_"+lng+"_FOOTER_TITLE").html(result[lng]);
				$("#title-button").attr("string-values",JSON.stringify(result));	//redefine default values with new
			};
		}

		if (button.id=="rb-title-button") {
			for (let lng in result) {
				$("input[name='TRANSLATIONS["+lng+"][FOOTER_RB_TITLE]']").val(result[lng]);
				$("#TRANSLATIONS_"+lng+"_FOOTER_RB_TITLE").html(result[lng]);
				$("#rb-title-button").attr("string-values",JSON.stringify(result));	//redefine default values with new
			};
		}

		if (button.id=="lb-title-button") {
			for (let lng in result) {
				$("input[name='TRANSLATIONS["+lng+"][FOOTER_LB_TITLE]']").val(result[lng]);
				$("#TRANSLATIONS_"+lng+"_FOOTER_LB_TITLE").html(result[lng]);
				$("#lb-title-button").attr("string-values",JSON.stringify(result));	//redefine default values with new
			};
		}
	}
}

function visibility_inputted(button, result) {
    if (!jQuery.isEmptyObject(result)) {
        console.log('Visibility conditions dialog result');
        console.log(result);

        if (button.id == 'visibility-dialog') {

        }
    }
}


function clearLeftIcon() {
	$("#left_button_icon").val("");
	$("#left_button_icon_2").attr("name","-");
	event.preventDefault();
	return false;
}
