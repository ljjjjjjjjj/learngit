<template>
    <div id="myChart" :style="{width: '800px', height: '600px'}"></div>
</template>
<script>
    export default {
        name: 'Echarts',
        mounted(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title:{
                    text:'西北地区性别占比',
                    subtext:'数据来自网络'
                },
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '男','女'],
                        ['陕西',19287575,18039804],
                        ['甘肃',13064193,12511070],
                        ['新疆',11270147,10545668],
                        ['宁夏',3227404,3073946],
                        ['青海',2913793,2712930]
                    ]
                },
                xAxis: {type: 'category'},
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [
                    {type: 'bar'},
                    {type: 'bar'}
                ]
            });
        }
    }
</script>