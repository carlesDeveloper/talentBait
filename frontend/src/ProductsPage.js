
import React, { useState,useContext } from 'react'
import { DataContext } from './context/DataContext';
import ReactTable from "./SimpleReactTable.js";
import ProductView from "./ProductView.js";
import "./assets/css/table.css"

function ProductsPage(){
    const {data} = useContext(DataContext);
    const [isProductSelected, setIsProductSelected] = useState(false)
    const [productsView, setProductsView] = useState(undefined)
    // const DeleteButton = ({ cell: { value } }) => {
    //     const [isDeleting, setIsDeleting] = useState(false);
      
    //     const handleDelete = async () => {
    //       setIsDeleting(true);
    //       // Implementar la lógica para eliminar el elemento con el valor especificado
    //       // (por ejemplo, llamar a una API)
    //       console.log(value)
    //       setIsDeleting(false);
    //     };
      
    //     return (
    //       <button
    //         onClick={handleDelete}
    //         disabled={isDeleting}
    //       >
    //         {isDeleting ? 'Eliminando...' : 'Eliminar'}
    //       </button>
    //     );
    // };
    const selectElement = (e, row) => {
        setIsProductSelected(true)
        const productSelected = row.original.productName
        const productsFiltered = data.products.filter(p => p.productName === productSelected)
        setProductsView(productsFiltered)
    }

    return(
        <>
            {data !==null ? (
                <>
                    <div className='totalproducts'>
                        <h3>Total products</h3>
                    <ReactTable 
                        data={data.products}
                        columns={[
                            {
                                Header: "",
                                accessor: "productImage",
                                Cell: tableProps => (
                                    <img
                                    src={tableProps.row.original.productImage}
                                    width={60}
                                    alt='Player'
                                    />
                                )
                            },
                            {
                                Header: "Name",
                                accessor: "productName"
                            },
                            {
                                Header: "Description",
                                accessor: "productDescription"
                            },
                            {
                                Header: "Price",
                                accessor: "price"
                            },
                            // {
                            //     Header: 'Acciones',
                            //     Cell: DeleteButton,
                            // },
                            
                        ]}
                        onRowClick = {selectElement}
                />
                </div>
                </>
                ) : null}
                {isProductSelected === true ? (
                    <div className='product__specifications'>
                        {productsView.map(product => (
                            <ProductView 
                                dataApp={data}
                                dataProduct={product} 
                            />
                        ))}
                    </div>
                ) : null}
            </>
    )
}

export default ProductsPage;