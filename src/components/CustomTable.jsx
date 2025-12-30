
import { useState } from "react";
import { TableRoot, TableCaption, TableHeader, TableRow, TableBody, TableColumnHeader, TableCell } from "@chakra-ui/react"

export const CustomTable = () => {
    const [baremetalData, setBaremetalData] = useState([
        { baremetalId: 'bm-001', brand: 'Dell', ipAddress: '192.168.1.10' },
        { baremetalId: 'bm-002', brand: 'HP', ipAddress: '192.168.1.11' },
        { baremetalId: 'bm-003', brand: 'Lenovo', ipAddress: '192.168.1.12' },
    ])
    
    return (
        <>
            {baremetalData.length !== 0 &&
                <TableRoot
                    width="95%"
                    mx="auto"
                    my={6}
                >
                    <TableCaption style={{ captionSide: "top", paddingBottom: '20px' }} color="gray.600" fontSize="lg">
                        Bare Metal Servers
                    </TableCaption>
                    {/* Table Header */}
                    <TableHeader>
                        <TableRow
                            bg="primary"
                            _hover={{ bg: "primary.hover" }}
                        >
                            <TableColumnHeader color="white">Id</TableColumnHeader>
                            <TableColumnHeader color="white">Brand</TableColumnHeader>
                            <TableColumnHeader color="white">IP Address</TableColumnHeader>
                        </TableRow>
                    </TableHeader>

                    {/* Table Body */}
                    <TableBody>
                        {baremetalData.map((item, ndx) => {
                            return (
                                <TableRow key={ndx}>
                                    <TableCell>{item.baremetalId}</TableCell>
                                    <TableCell>{item.brand}</TableCell>
                                    <TableCell>{item.ipAddress}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </TableRoot>
            }
        </>
    )
}