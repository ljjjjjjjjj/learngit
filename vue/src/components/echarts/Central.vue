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
                    text:'华中地区性别占比',
                    subtext:'数据来自网络'
                },
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '男','女'],
                        ['河南',47493063,46536876],
                        ['湖南',33776459,31924303],
                        ['湖北',29391247,27846480]
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