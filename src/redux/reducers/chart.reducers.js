// import { listenerCount } from "pg/lib/query";

const initialState = {
    data: [],
    dataForUs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dataForEu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    loading: true,

}
const setChart = (state = initialState, action) => {
  
    switch (action.type) {
        case 'SET_CHARTS':
            let data = [...action.payload];
            let copyState = { ...state };
            let dataForUs = copyState.dataForUs;
            let dataForEu = copyState.dataForEu;


            data = data.map(v => {
                console.log(v)
                let date = v.avail_start;
                date = date.split("-")
                if (date[1] == "01") {
                    if (v.continent_origin === "US") {
                        dataForUs[0] += 1;
                    } else {

                        dataForEu[0] += 1;
                    }
                }

                else if (date[1] == "02") {

                    if (v.continent_origin === "US") {
                        dataForUs[1] += 1;
                    } else {

                        dataForEu[1] += 1;
                    }

                }
                else if (date[1] == "03") {

                    if (v.continent_origin === "US") {
                        dataForUs[2] += 1;
                    } else {

                        dataForEu[2] += 1;
                    }

                }
                else if (date[1] == "04") {
                    if (v.continent_origin === "US") {
                        dataForUs[3] += 1;
                    } else {

                        dataForEu[3] += 1;
                    }

                }
                else if (date[1] == "05") {
                    if (v.continent_origin === "US") {
                        dataForUs[4] += 1;
                    } else {

                        dataForEu[4] += 1;
                    }

                }
                else if (date[1] == "06") {
                    if (v.continent_origin === "US") {
                        dataForUs[5] += 1;
                    } else {

                        dataForEu[5] += 1;
                    }
                }
                else if (date[1] == "07") {
                    if (v.continent_origin === "US") {
                        dataForUs[6] += 1;
                    } else {

                        dataForEu[6] += 1;
                    }
                }
                else if (date[1] == "08") {
                    if (v.continent_origin === "US") {
                        dataForUs[7] += 1;
                    } else {

                        dataForEu[7] += 1;
                    }
                }
                else if (date[1] == "09") {
                    if (v.continent_origin === "US") {
                        dataForUs[8] += 1;
                    } else {

                        dataForEu[8] += 1;
                    }
                }
                else if (date[1] == "10") {
                    if (v.continent_origin === "US") {
                        dataForUs[9] += 1;
                    } else {

                        dataForEu[9] += 1;
                    }
                }
                else if (date[1] == "11") {
                    if (v.continent_origin === "US") {
                        dataForUs[10] += 1;
                    } else {

                        dataForEu[10] += 1;
                    }
                }
                else if (date[1] == "12") {
                    if (v.continent_origin === "US") {
                        dataForUs[11] += 1;
                    } else {

                        dataForEu[11] += 1;
                    }
                }

            })
            copyState.dataForUs = dataForUs;
            copyState.loading = false
            return copyState;


        default:
            return state;
    }
}
export default setChart;


