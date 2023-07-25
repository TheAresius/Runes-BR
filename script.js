// global variables cuz lazy
var dropdown1 = null
var dropdown2 = null
var status_list = null
var previousClickedImage = null;

var rune_format = null;
var enhancement_list1 = null;
var enhancement_list2 = null;
var tier = null;
var rarity = null;
var enhancement1 = 1;
var enhancement2 = 1;

var primary = null;
var secondary = null;
var new_secondary_stats = null;
var new_secondary_stats = null;
var stats1_string = null;
var stats2_string = null;

var primary_final = null;
var secondary_final = null;
var second_enhancement_string = 0;
var difference1 = 0;
var difference2 = 0;

function FormatSelect(value, image, image_path) {
    primary = null
    secondary = null
    stats2_string = null
    rune_format = value
    second_enhancement_string = 0
    enhancement2 = 1


    // resets the enhanement lists
    enhancement_list1 = $(".enhancement");
    enhancement_list2 = $(".secondary_enhancement");
    enhancement_list1.empty()
    enhancement_list2.empty()

    // creates the enhancement list
    for (var i = 0; i<first_enhancement.length; i++){
        var option1 = $('<option>').text('+'+i).val(first_enhancement[i])
        enhancement_list1.append(option1)
    }
    for (var i = 0; i<second_enhancement.length; i++){
        var option2 = $('<option>').text(i).val(second_enhancement[i])
        enhancement_list2.append(option2)
    }
    // turns the rune yellow when selecting it
    $('.clicked_image').hide();
    $(image).siblings('.clicked_image').attr('src', image_path).show();
    var clickedImage = image.parentElement.querySelector('.clicked_image');
    clickedImage.src = image_path;
    clickedImage.style.visibility = 'visible';
    previousClickedImage = clickedImage;
  
    // changes the dropdown list based on the rune format
    dropdown1 = $(".primary_stats");
    dropdown2 = $(".secondary_stats");
    dropdown1.empty().append('<option value="0">Selecione uma propriedade</option>');
    dropdown2.empty().append('<option value="0">Selecione uma propriedade primária</option>');
    
    // appends all possible stats for each type of rune format
    for (var i = 0; i < string_all[value].length; i++) {
        var option3 = $('<option>').text(string_all[value][i]).val(first_list[value][i]);
        dropdown1.append(option3);
    }
    return rune_format
}

function TierSelect(value) {
    tier = value

    // turns the tier yellow when selecting it
    $(".tier_container").removeClass("active");
    $(".tier_container:eq(" + value + ")").addClass("active");
    return tier
}

function RaritySelect(value) {
    rarity = value
    // turns the rarity yellow when selecting it
    switch (value) {
        case 0:
            $(".rarity_normal").removeClass("active");
            $(".rarity_rare").removeClass("active");
            $(".rarity_epic").removeClass("active");
            $(".rarity_legend").removeClass("active");
            $(".rarity_normal").addClass("active");
            break;
        case 1:
            $(".rarity_normal").removeClass("active");
            $(".rarity_rare").removeClass("active");
            $(".rarity_epic").removeClass("active");
            $(".rarity_legend").removeClass("active");
            $(".rarity_rare").addClass("active");
            break;
        case 2:
            $(".rarity_normal").removeClass("active");
            $(".rarity_rare").removeClass("active");
            $(".rarity_epic").removeClass("active");
            $(".rarity_legend").removeClass("active");
            $(".rarity_epic").addClass("active");
            break;
        case 3:
            $(".rarity_normal").removeClass("active");
            $(".rarity_rare").removeClass("active");
            $(".rarity_epic").removeClass("active");
            $(".rarity_legend").removeClass("active");
            $(".rarity_legend").addClass("active");
            break;
    }
    return rarity
}

function EnhancementSelect(value) {
    enhancement1 = value
    return enhancement
}

function PrimarySelect(list_value, stats) {
    primary = list_value
    stats1_string = stats

    // removes the 'primary stats' and value from the list of 'secondary stats'
    excluded_index = string_properties.indexOf(stats);
    new_secondary_strings = string_properties.filter((string) => string !== stats);
    new_secondary_stats = second_list.filter((value, index) => index !== excluded_index);
    
    // creates the dropdown list for the 'secondary stats' based on the selected stats of the 'primary stats'
    var dropdown2 = $(".secondary_stats");
    dropdown2.empty().append('<option value="0">Selecione uma propriedade</option>');
    for (var i = 0; i < new_secondary_strings.length; i++) {
        var option2 = $('<option>').text(new_secondary_strings[i]).val(new_secondary_stats[i]);
        dropdown2.append(option2);
    }
    return primary, new_secondary_strings, new_secondary_stats, stats1_string
}

function SecondarySelect(list_value, stats) {
    secondary = list_value;
    stats2_string = stats;
    return secondary, stats2_string
}
function SecondEnhancementSelect(value, string){
    enhancement_list2 = $(".secondary_enhancement");
    default_enhancement2 = "1"
    enhancement2 = value;
    second_enhancement_string = string
    return enhancement2, second_enhancement_string
}

function CheckError(){
    if ([rune_format, tier, rarity, primary].includes(null) || stats1_string == 'Selecione uma propriedade'){
        window.alert("Algo de errado não está certo. Selecione um formato de runa, tier, raridade e uma propriedade primária.")
        results.innerHTML = ''
        if (stats1_string == 'Selecione uma propriedade') {
            stats2_string = null
        }
    } else {
        Calculate()
    }  
}

function Calculate() {
    primary_final = primary*tier_rarity_mult[rarity][tier]*enhancement1 // rune formulas
    secondary_final = secondary*second_mult[tier]*enhancement2   // rune formulas
    difference1 = primary_final - (primary*tier_rarity_mult[rarity][tier])
    difference2 = secondary_final - (secondary*second_mult[tier])
    // string adjustment for UI display
    if (['Ataque', 'Defesa', 'HP', 'Ataque Especial', 'Defesa Especial', 'Lança Infernal'].includes(stats1_string)) {
        primary_final = Math.floor(primary_final)
        difference1 = Math.floor(difference1)
    } else {
        primary_final = (primary_final.toFixed(2) + "%")
        difference1 = (difference1.toFixed(2) + "%")
    }

    if (['Ataque', 'Defesa', 'HP', 'Ataque Especial', 'Defesa Especial', 'Lança Infernal'].includes(stats2_string)) {
        secondary_final = Math.floor(secondary_final)
        difference2 = Math.floor(difference2)
    }
    else {
        secondary_final = (secondary_final.toFixed(2) + "%")
        difference2 = (difference2.toFixed(2) + "%")
    }
    results.innerHTML = ''
    results.innerHTML = `<div><br>`
    results.innerHTML += `<div><span class = "bold"> Status Primário</span>:`;
    results.innerHTML += `<div>${stats1_string}: <span class="yellow">${primary_final}</span> <span class = "green"> (+${difference1})</span>`
    results.innerHTML += `<div><br><span class = "bold">Status Secundário</span>:`;
    if (stats2_string == null || stats2_string == 'Selecione uma propriedade') {
        results.innerHTML += `<div> - `
    } else {
    results.innerHTML += `<div>${stats2_string}: <span class="yellow">${secondary_final}</span> <span class = "green"> (+${difference2})</span>`
    }
    results.innerHTML += `<div><br>`
    return primary_final, secondary_final
}
function Reset () {
    $('.clicked_image').hide();
    $(".tier_container").removeClass("active");
    $(".rarity_normal").removeClass("active");
    $(".rarity_rare").removeClass("active");
    $(".rarity_epic").removeClass("active");
    $(".rarity_legend").removeClass("active");
    dropdown1.empty().append('<option value="0">-</option>');
    dropdown2.empty().append('<option value="0">-</option>');
    enhancement_list1.empty().append('<option value="default">-</option>')
    enhancement_list2.empty().append('<option value="default">-</option>')
    primary_final = null;
    secondary_final = null;
    tier = null;
    rarity = null;
    enhancement1 = 1;
    enhancement2 = 1;
    results.innerHTML = ''
}