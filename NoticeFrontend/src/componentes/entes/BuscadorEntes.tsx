import React from 'react';
import {TextField,InputAdornment,IconButton,Box,CircularProgress, Grid} from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';

interface BuscadorEntesProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onHandleSearch: () => void | Promise<void>;
  fetchData: () => void | Promise<void>;
  loading?: boolean;
}

const BuscadorEntes: React.FC<BuscadorEntesProps> = ({searchTerm,setSearchTerm,onHandleSearch,fetchData,loading = false}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onHandleSearch();
    }
  };

  const handleReset = async () => {
    setSearchTerm('');
    await fetchData();
  };

     return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Ingresa el texto y presiona enter para iniciar la búsqueda..."
        onKeyPress={(e) => e.key === 'Enter' && onHandleSearch()}
        InputProps={{
          startAdornment: (
            <SearchIcon color="action" sx={{ marginRight: '8px', opacity: 0.7 }} />
          ),
        }}
        sx={{
          maxWidth: '100%', // Puedes ajustar este valor
          flexGrow: 1
        }}
      />
      
      {/* <IconButton
        color="primary"
        onClick={onHandleSearch}
        disabled={loading}
        sx={{
          height: '40px',
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': { bgcolor: 'primary.dark' }
        }}
      >
        {loading ? 
          <CircularProgress size={24} color="inherit" /> : 
          <SearchIcon />
        }
      </IconButton> */}
    </>
  );

};

export default BuscadorEntes;