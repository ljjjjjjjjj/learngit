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
                    text:'华南地区性别占比',
                    subtext:'数据来自网络'
                },
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '男','女'],
                        ['广东',54400538,49919921],
                        ['广西',23924704,22099057],
                        ['海南',4592283,4079202]
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