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
                  text:'华东地区性别占比',
                    subtext:'数据来自网络'
                },
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '男','女'],
                        ['山东',48446944,47345775],
                        ['江苏',39626707,39034234],
                        ['安徽',30245513,29254955],
                        ['浙江',27965641,26461250],
                        ['江西',23003521,21564276],
                        ['福建',18981054,17913163],
                        ['上海',11854916,11164280]
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