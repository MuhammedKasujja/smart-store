import { createContext, useState } from "react";

const InvoiceContext = createContext(undefined)

const Invoices: React.FC = () => {
    const [invoice, setInvoice] = useState()
    return (<>
        {/* <InvoiceContext.Provider value={{ invoice, setInvoice }}></InvoiceContext.Provider> */}
    </>)
}

export default Invoices