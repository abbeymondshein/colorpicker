/* Exercise 2: Color picker */
var colors = [ '42b0f4', 'a8edff', '71ff42', ];
var previewColor;


function setPreviewColor(color) {
	$('.preview').css('background-color', color)

}

$(document).on('keyup', 'input', function() {
	setPreviewColor($('input').val())
	var x=$('.preview').css('background-color')
	$('.color-code').text(x)
} )

function addBox(color) {
	$('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>'
)
}

$(document).on('click', '#add-to-favorite', function(){
	var color=$('#color').val()
	// debugger
	addBox(color)
	$('#color').val('').focus()
	if ($('#colors .item').length > 16 )
	{
		$('#colors .item').last().remove()
	}
	//$('#color').focus()
}

	)

$(document).ready(function(){
	// debugger
	colors.forEach(function(color){
		addBox(color)
	})
	var randomindex = Math.floor( Math.random() * colors.length )

	setPreviewColor( colors[randomindex] )
	previewColor = colors[randomindex]

	$('#colors').mouseenter(function(e){
	console.log(e.target)
	//debugger
	var itemcolor = $(e.target).attr("style") 
	console.log(itemcolor)
	//debugger 

	var string = $(e.target).attr("style")
	var newstring = string.replace("background-color: ","").replace(";","")
	setPreviewColor(newstring)

}) 

	$('#colors').mouseleave(function (e) {
		setPreviewColor(previewColor)
	})
})

