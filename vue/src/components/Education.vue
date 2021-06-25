<template>
    <div id="myChart" :style="{width: '1500px', height: '600px'}"></div>
</template>
<script>
    export default {
        name: 'Echarts',
        mounted(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: [{
                    text: '不同年龄段受教育程度分布',
                    left:'15%'
                }, {
                    subtext: '20~24岁',
                    left: '20%',
                    top: '40%',
                    textAlign: 'center'
                }, {
                    subtext: '24~29岁',
                    left: '40%',
                    top: '40%',
                    textAlign: 'center'
                }, {
                    subtext: '29~34岁',
                    left: '60%',
                    top: '40%',
                    textAlign: 'center'
                },{
                    subtext: '34~39岁',
                    left: '80%',
                    top: '40%',
                    textAlign: 'center'
                },{
                    subtext: '39~44岁',
                    left: '20%',
                    top: '80%',
                    textAlign: 'center'
                },{
                    subtext: '44~49岁',
                    left: '40%',
                    top: '80%',
                    textAlign: 'center'
                },{
                    subtext: '49~54岁',
                    left: '60%',
                    top: '80%',
                    textAlign: 'center'
                },{
                    subtext: '54~59岁',
                    left: '80%',
                    top: '80%',
                    textAlign: 'center'
                }],
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '24', '29', '34', '39', '44', '49','54','59'],
                        ['高中',26405215,18106494,17060586,17482789,15997333,18395495,14383051,7628024],
                        ['大学专科',17541556,11184322,8507756,7612675,5785996,4673476,2734105,2242978],
                        ['大学本科',13973662,8367000,5499846,4421841,3492699,2488858,1037487,790027],
                        ['研究生',781405,1232590,774428,516654,350004,274644,93529,49737]
                    ]
                },
                series: [{
                    type: 'pie',
                    radius: '20%',
                    center: ['20%', '30%']
                    // No encode specified, by default, it is '2012'.
                }, {
                    type: 'pie',
                    radius: '20%',
                    center: ['40%', '30%'],
                    encode: {
                        itemName: 'product',
                        value: '29'
                    }
                }, {
                    type: 'pie',
                    radius: '20%',
                    center: ['60%', '30%'],
                    encode: {
                        itemName: 'product',
                        value: '34'
                    }
                }, {
                    type: 'pie',
                    radius: '20%',
                    center: ['80%', '30%'],
                    encode: {
                        itemName: 'product',
                        value: '39'
                    },
                },{
                    type: 'pie',
                    radius: '20%',
                    center: ['20%', '70%'],
                    encode: {
                        itemName: 'product',
                        value: '44'
                    },
                },{
                    type: 'pie',
                    radius: '20%',
                    center: ['40%', '70%'],
                    encode: {
                        itemName: 'product',
                        value: '49'
                    },
                },{
                    type: 'pie',
                    radius: '20%',
                    center: ['60%', '70%'],
                    encode: {
                        itemName: 'product',
                        value: '54'
                    },
                },{
                    type: 'pie',
                    radius: '20%',
                    center: ['80%', '70%'],
                    encode: {
                        itemName: 'product',
                        value: '59'
                    },
                }]
            });
        }
    }
</script>