import { Box, Divider, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material"
import type { enteDTO } from "../../models/entes.model";
import type { AxiosResponse } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";

const IndiceEntes=()=>{

  const [data, setData] = useState <enteDTO[]> ([]);
  const [cargando, setCargando] = useState(true);


    useEffect(()=>{
        const fetchData = async()=>{
        try {    
        const response: AxiosResponse<enteDTO[]> = await axios.get('https://localhost:7015/entes/Todos');    
        console.log(`Haciendo el Get Respuesta: ${JSON.stringify(response.data, null, 2)}`);    
        //Siendo la Respuesta correcta, sin errores... Carga la variable de estado (estructura enteDTO)
        setData(response.data);
        } catch (error) {
        // Manejo de errores
        if (axios.isAxiosError(error)) {
          console.error('Error de Axiossssss:', {
            message: error.message,
            code: error.code,
            status: error.response?.status,
            data: error.response?.data
          });
          
          if (error.response) {
            // El servidor respondió con un código de error
            console.error('Error del servidor:', error.response.data);
          } else if (error.request) {
            // La petición fue hecha pero no hubo respuesta
            console.error('No hubo respuesta del servidor');
          } else {
            // Error al configurar la petición
            console.error('Error al configurar la petición:', error.message);
          }
        } else {
          console.error('Error inesperado:', error);
        }
      } finally {
        setCargando(false);
      }
    };
    fetchData();
    },[])

     if (cargando) return <div>Cargando...</div>;

    function handleEdit(id: number): void {
        throw new Error("Function not implemented.");
    }

    function handleDelete(id: number): void {
        throw new Error("Function not implemented.");
    }

    return(
        <>
         <Stack>
          <Box>
           <Paper variant="compact">
            <Typography variant="h3">Índice de Entes</Typography>
            </Paper>
           </Box>
           {/* Aquí va el código para renderizar la tabla de Entes */}

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="tabla de datos">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NOMBRE</TableCell>
            <TableCell>TIPO</TableCell>       
            <TableCell align="center" sx={{ width: '150px' }}>ACCIONES</TableCell>     
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.nombre}</TableCell>
              <TableCell>{row.tipo || 'No especificado'}</TableCell>  
                       <TableCell align="center" sx={{ padding: '6px' }}>
            <Tooltip title="Editar">
              <IconButton 
                color="primary"
                onClick={() => handleEdit(row.id)}
                sx={{ 
                  '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.08)' },
                  margin: '0 4px'
                }}
              >
                <Edit fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Eliminar">
              <IconButton 
                color="error"
                onClick={() => handleDelete(row.id)}
                sx={{ 
                  '&:hover': { backgroundColor: 'rgba(244, 67, 54, 0.08)' },
                  margin: '0 4px'
                }}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Tooltip>
          </TableCell>            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           <Divider/>

         </Stack>
        </>
    );
}
export default IndiceEntes