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
                    text:'西南地区性别占比',
                    subtext:'数据来自网络'
                },
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '男','女'],
                        ['四川',40827834,39589694],
                        ['云南',23856696,22110070],
                        ['贵州',17905471,16843085],
                        ['重庆',14608870,14237300],
                        ['西藏',1542652,1459513]
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