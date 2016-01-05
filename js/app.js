$(function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        autoHeight: false
    });
    $(document).ready(function() {
        $('#example').DataTable();
        $("#edudetspan").show("slide", { direction: "right" }, 1000);
        $(".address").show("slide", { direction: "left" }, 1000);;
    });
    //company names in y axis , years in x axis
    $('#container').highcharts({
        plotOptions: {
            series: {
                connectNulls: true
            }
        },
        title: {
            text: 'Career Graph',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Year'
            },plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
       legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Vidteq',
            data: [null, null, 2012, null, null, null, null, null, null, null, null, 2014]
        }, {
            name: 'Infosys',
            data: [null, null, null, null, null, 2015, null, null, null, null, null, 2014]
        }, {
            name: 'Capgemini',
            data: [null, null, null, null, null, 2015, null, null, null, null, 2015, null]
        }]
    });
});