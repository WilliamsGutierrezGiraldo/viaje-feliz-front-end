import React from 'react'
import Vivienda from './Vivienda'

export default function Viviendas() {
    return (
        <div>
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-6">
                        <Vivienda precioDiario={250.000} tipo={1} />
                    </div>
                    <div className="col-sm-6">
                        <Vivienda precioDiario={125.000} tipo={1} />
                    </div>
                    <div className="col-sm-6">
                        <Vivienda precioDiario={380.000} tipo={2} />
                    </div>
                    <div className="col-sm-6">
                        <Vivienda precioDiario={500.000} tipo={1} />
                    </div>
                    <div className="col-sm-6">
                        <Vivienda precioDiario={700.000} tipo={2} />
                    </div>
                    {/* <DatePicker dateFormat="dd/MM/yyyy" minDate={new Date()}/> */}
                    {/* <input classNameName="form-check-input" type="radio" name="busquedaPor" id="searchBy3" /> */}
                </div>
            </React.Fragment>
        </div>
    )
}
