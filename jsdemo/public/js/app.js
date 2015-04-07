$('#areabutton').click(function() {
    console.log('area!!!')
    var side1 = parseFloat($('#sidelength1').val());
    var side2 = parseFloat($('#sidelength2').val());
    var result_area = parseFloat(side1*side2);
    $('#area').html(result_area);
});

$('#slopebutton').click(function() {
    var x1 = parseFloat($('#x1').val());
    var y1 = parseFloat($('#y1').val());
    var x2 = parseFloat($('#x2').val());
    var y2 = parseFloat($('#y2').val());
    var y_diff = parseFloat((y1-y2));
    var x_diff = parseFloat((x1-x2));
    var slope = parseFloat(y_diff/x_diff)
    $('#result').html(slope);
});

$('#salestaxbutton').click(function() {
    var price = parseFloat($('#price').val());
    var tax_percentage = parseFloat($('#taxpercentage').val());
    var total_price = parseFloat(((price*tax_percentage)+price));
    $('#output').html(total_price);
});







