import React from 'react'
import Vivienda from './Vivienda'

export default function Viviendas(props) {
    return (
        <div>
            <React.Fragment>
                <div className="row">
                    {
                        props.viviendas.map((vivienda) => (
                            <div className="col-sm-6" key={vivienda.id.toString()}>
                                <Vivienda informacion={vivienda} />
                            </div>
                        ))
                    }
                    {/* <DatePicker dateFormat="dd/MM/yyyy" minDate={new Date()}/> */}
                    {/* <input classNameName="form-check-input" type="radio" name="busquedaPor" id="searchBy3" /> */}
                </div>
            </React.Fragment>
        </div>
    )
}
