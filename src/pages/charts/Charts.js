import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Lchart from './Lchart';
import Bchart from './Bchart';
import Achart from './Achart';
import Pchart from './Pchart';
import WidgetChart from './WidgetChart';

function Charts() {
    // Genrate Random Color
    const generateRandomColor = () => {
        let color = '#';
        const digits = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) {
            const randomDigit = Math.floor(Math.random() * 16);
            color += digits[randomDigit];
        }
        return color;
    };

    const [dataChart, setDataChart] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/ChartData');
            const data = response.data;

            const formattedData = data[0].Data.map((item) => ({
                name: item.name,
                ...item,
            }));

            setDataChart(formattedData);
        } catch (error) {
            console.error(error);
        }
    };

    if (dataChart.length === 0) {
        return null;
    }
    const legendKeys = Object.keys(dataChart[0]).filter((key) => key !== 'name');

    return (
        <>
            <div className='p-3'>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row">
                                <div>
                                    <h6>Line Chart</h6>
                                    <Lchart
                                        data={dataChart}
                                        xAxisName={"name"}
                                        legendKeys={legendKeys}
                                        generateColor={generateRandomColor}
                                    />
                                </div>

                                <div>
                                    <h6>Bar Chart</h6>
                                    <Bchart
                                        data={dataChart}
                                        xAxisName={"name"}
                                        legendKeys={legendKeys}
                                        generateColor={generateRandomColor}
                                    />
                                </div>

                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div>
                                    <h6>Area Chart</h6>
                                    <Achart
                                        data={dataChart}
                                        xAxisName={"name"}
                                        legendKeys={legendKeys}
                                        generateColor={generateRandomColor}
                                    />
                                </div>

                                <div>
                                    <h6>Pie Chart</h6>
                                    <Pchart
                                        data={dataChart}
                                        dataKey="Resumes Sourced"
                                        generateColor={generateRandomColor}
                                    />
                                </div>
                                <div>
                                    <h6>Widget Chart</h6>
                                    <WidgetChart
                                    data={dataChart}
                                    dataKey="Resign"
                                    generateColor={generateRandomColor}
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Charts