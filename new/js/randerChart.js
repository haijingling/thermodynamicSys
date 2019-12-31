$(function() {
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '14%'];
            },
            textStyle:{
                fontSize: 16,

            },
            backgroundColor:'#354052' 
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data: ['一次供压', '一次回压', '二次供压','二次回压','一次供暖','一次回温','二次供暖','二次回温'],
            x: 'center',
            textStyle:{
                fontSize: 12,
                color:'#333'
            },
            top:'2.5%',
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            boundaryGap: true,
            data: ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06']
        },
        yAxis: [
            {
                name: '温度分析',
                nameTextStyle:{
                    color:'#333'
                },
                type: 'value',
                axisLine: {
                    lineStyle:{
                        color:'#ccc'
                    }
                },
                axisTick: {
                    show:true,
                    lineStyle:{
                        color:'#ccc'
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                    }
                },
                axisLabel : {
                    formatter: '{value}',
                    textStyle: { //改变刻度字体样式
                        color: '#333'
                    }
                },
                min: 0,
                splitNumber: 3,
            },
            {
                name: '压力分析',
                nameTextStyle:{
                    color:'#333'
                },
                type: 'value',
                axisLine: {
                    lineStyle:{
                        color:'#ccc'
                    }
                },
                axisTick: {
                    show:true,
                    lineStyle:{
                        color:'#ccc'
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                    }
                },
                axisLabel : {
                    formatter: '{value}',
                    textStyle: { //改变刻度字体样式
                        color: '#333'
                    }
                },
                min: 0,
                splitNumber: 3,
            }],
            dataZoom: [{
                type: "slider", /*类型*/
                xAxisIndex: 0, /*对应的轴*/
                bottom: "10", /*位置，定位*/
                start: 20, /*开始*/
                end: 100, /*结束*/
                handleIcon: "M0,0 v9.7h5 v-9.7h-5 Z",
                handleStyle: { /*手柄的样式*/
                    color: "#40bcf9",
                    borderColor: "#1fb2fb"
                },
                backgroundColor: "#e2f3ff", /*背景 */
                dataBackground: { /*数据背景*/
                    lineStyle: {
                        color: "#000000"
                    },
                    areaStyle: {
                        color: "#d4d9dd"
                    }
                },
                fillerColor: "rgba(31,178,251,0.2)", /*被start和end遮住的背景*/
                labelFormatter: function (value, params) { /*拖动时两端的文字提示*/
                    var str = "";
                    if (params.length > 4) {
                        str = params.substring(0, 4) + "…";
                    } else {
                        str = params;
                    }
                    return str;
                }
            }],
        grid: {
            left: '1.2%',
            right: '1.5%',
            bottom: '20%',
            top: '10%',
            containLabel: true,
            borderWidth: '0'
        },
        series: [
            {
                name: "一次供压",
                type: "line",
                lineStyle:{
                    type:'dashed'
                },
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                data: [0, 0.5, 0.8, 1, 1.2, 1.5, 1.6, 1.8, 2.5, 3, 4, 4.8, 6, 7.4, 8.4, 9.2],
                itemStyle: {
                    normal: {
                        // color: '#2b82aa',
                        color:'#d1a4f3',
                        lineStyle: {
                            width: 2,
                            // type:'dashed'
                        }
                    }
                }

            },
            {
                name: "一次回压",
                type: "line",
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                data: [0, 0.9, 1.1, 1.5, 2, 1.5, 1.6, 1.8, 1.9, 2, 2.4, 2.8, 3, 3.5, 4, 5],
                itemStyle: {
                    normal: {
                        // color: '#c23531',
                        color:'#61a0a8',
                        lineStyle: {
                            width: 2,
                            // type:'dashed'
                        }
                    }
                }

            },
            {
                name: "二次供压",
                type: "line",
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                data: [2, 1, 1.2, 1.3, 1.6, 1.8, 2, 3, 3.5, 4, 4.5, 4.5, 4.6, 8, 6.5, 7],
                itemStyle: {
                    normal: {
                        // color: '#2f4554',
                        color:'#ccec69',
                        lineStyle: {
                            width: 2,
                            // type: 'dotted',
                        }
                    }
                }

            },
            {
                name: "二次回压",
                type: "line",
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                data: [0, 10, 1.2, 1.3, 1.6, 8, 2, 3, 3, 4, 4.5, 5, 4.6, 7, 6.5, 7],
                itemStyle: {
                    normal: {
                        // color: '#0195a3',
                        color:'#90cbf4',
                        lineStyle: {
                            width: 2,
                            // type: 'dotted',
                        }
                    }
                }

            },
            {
                name: "一次供暖",
                type: "bar",
                symbolSize: 10,
                data: [0, 0, 2, 1.3, 1.6, 8, 2, 3.6, 3, 4, 4.5, 5, 4.6, 7, 6.5, 7],
                itemStyle: {
                    normal: {
                        // color: '#01949B',
                        color:'#01949B',
                        lineStyle: {
                            width: 2,
                        }
                    }
                },
                markPoint : {
                    color:'blue',
                    data : [
                         {type : 'min', name : '最小值'}
                    ]
                }

            },
            {
                name:'一次回温',
                type:'bar',
                symbolSize: 10,
                itemStyle:{
                    normal:{
                    // color:'#EBA954'
                    color:'#EBA954'
                }
            },
                data: [1, 2, 2, 1.3, 1.6, 8, 2, 3.6, 3, 4.5, 4.5, 5, 4.6, 7, 6, 7],
                markPoint : {
                    color:'blue',
                    data : [
                        // {type : 'max', name : '最大值'},
                         {type : 'min', name : '最小值'}
                    ]
                }
            
            },
            {
                name:'二次供暖',
                type:'bar',
                // yAxisIndex: 1,
                itemStyle:{
                    normal:{
                        // color:'#C23531'
                        color:'#C23531'
                    }
                },
                data: [1, 1, 2.8, 1.3, 1.8, 8, 2, 3.6, 3.5, 4.5, 4.5, 5, 4.6, 7, 6, 7],
                 markPoint : {
                    color:'blue',
                    data : [
                        // {type : 'max', name : '最大值'},
                         {type : 'min', name : '最小值'}
                    ]
                }
            
            },
            {
                name:'二次回温',
                type:'bar',
                // yAxisIndex: 1,
                itemStyle:{
                    normal:{
                        // color:'#0060b6'
                        color:'#4195cf'
                    }
                },
                data: [1, 5, 2.8, 1, 1.8, 8, 2, 3.6, 3, 4.5, 4.5, 5, 4.6, 7, 6.2, 7],
                 markPoint : {
                    color:'blue',
                    data : [
                        // {type : 'max', name : '最大值'},
                         {type : 'min', name : '最小值'}
                    ]
                }
           }
        ]
    };
    myChart.setOption(option);
});