import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Autocomplete, Avatar, Box, Button, CardMedia, Checkbox, Collapse, Divider, FormControl, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Paper, Select, SelectChangeEvent, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore, HomeOutlined, StarBorder } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SendIcon from '@mui/icons-material/Send';
import { deepOrange } from "@mui/material/colors";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const options = [
  { label: 'Teste 1', id: 1 },
  { label: 'Teste 2', id: 2 },
];

const options2 = [
  { id: 1, item: 'Opção 1' },
  { id: 2, item: 'Opção 2' },
];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, disableColumnMenu: true },
  { field: 'firstName', headerName: 'First name', width: 130, disableColumnMenu: true },
  { field: 'lastName', headerName: 'Last name', width: 130, disableColumnMenu: true, },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 80,
    disableColumnMenu: true
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    disableColumnMenu: true,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'createdAt',
    headerName: 'Criado em',
    width: 150,
    type: 'date',
    valueFormatter: (params) => {
      if (!params) return '';
      const date = new Date(params);
      return new Intl.DateTimeFormat('pt-BR').format(date);
    },
    disableColumnMenu: true
  },
  {
    field: 'price',
    headerName: 'Valor (R$)',
    width: 150,
    type: 'number',
    disableColumnMenu: true,
    valueFormatter: (params) => {
      if (!params) return '';
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(params);
    },
  },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 100,
    type: 'boolean',
    disableColumnMenu: true,
    renderCell: (params: GridRenderCellParams) => (
      <Switch
        checked={params.row.status}
        onChange={(event) => {
          console.log(event.target.checked);
          // handleStatusChange(params.row.id, event.target.checked)
        }
        }
      />
    ),
  },
  { 
    field: 'acoes', 
    headerName: 'Ações', 
    width: 100,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Box>
        <IconButton aria-label="delete">
          <BorderColorIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    ),
  },
  
];

const rows2 = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, createdAt: '2024-11-15T14:30:00Z', price: 2305, status: true },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, createdAt: '2024-11-16T14:30:00Z', price: 6465, status: false },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, createdAt: '2024-11-17T14:30:00Z', price: 232, status: true },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, createdAt: '2024-11-18T14:30:00Z', price: 45355, status: false },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 15, createdAt: '2024-11-19T14:30:00Z', price: 3453, status: true },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, createdAt: '2024-11-20T14:30:00Z', price: 876, status: false },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, createdAt: '2024-11-21T14:30:00Z', price: 8763, status: true },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, createdAt: '2024-11-22T14:30:00Z', price: 945, status: false },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, createdAt: '2024-11-23T14:30:00Z', price: 17356, status: false },
  { id: 10, lastName: 'Smith', firstName: 'John', age: 29, createdAt: '2024-11-24T14:30:00Z', price: 11826, status: true },
  { id: 11, lastName: 'Doe', firstName: 'Jane', age: 34, createdAt: '2024-11-25T14:30:00Z', price: 3836, status: false },
  { id: 12, lastName: 'Brown', firstName: 'Charlie', age: 40, createdAt: '2024-11-26T14:30:00Z', price: 2376, status: true },
  { id: 13, lastName: 'Wilson', firstName: 'Sam', age: 28, createdAt: '2024-11-27T14:30:00Z', price: 1500, status: true },
  { id: 14, lastName: 'Taylor', firstName: 'Alex', age: 33, createdAt: '2024-11-28T14:30:00Z', price: 2200, status: false },
  { id: 15, lastName: 'Johnson', firstName: 'Chris', age: 25, createdAt: '2024-11-29T14:30:00Z', price: 3400, status: true },
  { id: 16, lastName: 'Lee', firstName: 'Kara', age: 31, createdAt: '2024-11-30T14:30:00Z', price: 1800, status: false },
  { id: 17, lastName: 'Kim', firstName: 'Daniel', age: 27, createdAt: '2024-12-01T14:30:00Z', price: 2500, status: true },
  { id: 18, lastName: 'Clark', firstName: 'Anna', age: 45, createdAt: '2024-12-02T14:30:00Z', price: 4000, status: false },
  { id: 19, lastName: 'Martinez', firstName: 'Luis', age: 38, createdAt: '2024-12-03T14:30:00Z', price: 5000, status: true },
  { id: 20, lastName: 'Garcia', firstName: 'Sophia', age: 22, createdAt: '2024-12-04T14:30:00Z', price: 2300, status: false },
  { id: 21, lastName: 'Lopez', firstName: 'Maria', age: 48, createdAt: '2024-12-05T14:30:00Z', price: 1200, status: true },
  { id: 22, lastName: 'Gonzalez', firstName: 'Juan', age: 53, createdAt: '2024-12-06T14:30:00Z', price: 4500, status: false },
  { id: 23, lastName: 'Perez', firstName: 'Carlos', age: 37, createdAt: '2024-12-07T14:30:00Z', price: 3100, status: true },
  { id: 24, lastName: 'Adams', firstName: 'Evelyn', age: 42, createdAt: '2024-12-08T14:30:00Z', price: 2800, status: false },
  { id: 25, lastName: 'White', firstName: 'James', age: 56, createdAt: '2024-12-09T14:30:00Z', price: 5100, status: true },
  { id: 26, lastName: 'Black', firstName: 'Lily', age: 33, createdAt: '2024-12-10T14:30:00Z', price: 2700, status: false },
  { id: 27, lastName: 'Green', firstName: 'Oliver', age: 29, createdAt: '2024-12-11T14:30:00Z', price: 1500, status: true },
  { id: 28, lastName: 'Hall', firstName: 'Emma', age: 35, createdAt: '2024-12-12T14:30:00Z', price: 3200, status: false },
  { id: 29, lastName: 'King', firstName: 'Lucas', age: 41, createdAt: '2024-12-13T14:30:00Z', price: 4600, status: true },
  { id: 30, lastName: 'Scott', firstName: 'Mason', age: 50, createdAt: '2024-12-14T14:30:00Z', price: 5400, status: false },
  { id: 31, lastName: 'Harris', firstName: 'Ella', age: 24, createdAt: '2024-12-15T14:30:00Z', price: 3900, status: true },
  { id: 32, lastName: 'Roberts', firstName: 'Noah', age: 36, createdAt: '2024-12-16T14:30:00Z', price: 2700, status: false },
  { id: 33, lastName: 'Carter', firstName: 'Grace', age: 32, createdAt: '2024-12-17T14:30:00Z', price: 4100, status: true },
  { id: 34, lastName: 'Bell', firstName: 'Liam', age: 28, createdAt: '2024-12-18T14:30:00Z', price: 3200, status: false },
  { id: 35, lastName: 'Young', firstName: 'Amelia', age: 21, createdAt: '2024-12-19T14:30:00Z', price: 1900, status: true },
  { id: 36, lastName: 'Turner', firstName: 'Ethan', age: 30, createdAt: '2024-12-20T14:30:00Z', price: 3800, status: false },
  { id: 37, lastName: 'Collins', firstName: 'Chloe', age: 27, createdAt: '2024-12-21T14:30:00Z', price: 2200, status: true },
  { id: 38, lastName: 'Baker', firstName: 'Jack', age: 55, createdAt: '2024-12-22T14:30:00Z', price: 5700, status: false },
  { id: 39, lastName: 'Wright', firstName: 'Zoe', age: 43, createdAt: '2024-12-23T14:30:00Z', price: 4900, status: true },
  { id: 40, lastName: 'Hill', firstName: 'Leo', age: 39, createdAt: '2024-12-24T14:30:00Z', price: 3700, status: false },
];


const paginationModel = { page: 0, pageSize: 10 };

export default function Home() {
  const [value, setValue] = useState<{id: number; item: string} | null>(options2[0]);
  const [inputValue, setInputValue] = useState('');
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <h1>Teste <HomeOutlined /></h1>

      <Divider variant="fullWidth">Button</Divider>
      <>
        <div>
          <Button variant="contained">Hello world</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </div>
        <div>
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Link
          </Button>
        </div>
        <div>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </div>
        <div>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
        <div>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        </div>
      </>

      <Divider variant="fullWidth">Autocomplete</Divider>
      <>
        <div>{`value: ${value !== null ? `id: '${value.id}', item: '${value.item}'` : 'null'}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: { id: number; item: string } | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options2}
          getOptionLabel={(option) => option.item}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Selecione uma opção" />}
          noOptionsText={'Nenhum resultado encontrado.'}
        />
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </>  

      <Divider variant="fullWidth">Select</Divider>
      
      <>
        <FormControl fullWidth sx={{ m: 1, maxWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <p>age: {age}</p>
      </>

      <Divider variant="fullWidth">Avatar</Divider>
      
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      
      <Divider variant="fullWidth">Lists</Divider>

      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </Box>

      <Divider variant="fullWidth">Table</Divider>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider variant="fullWidth">Data table</Divider>
      
      <Paper sx={{ height: 'auto', width: '100%' }}>
        <DataGrid
          rows={rows2}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 15, 20]}
          // checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    
      <Box sx={{ width: '100%', height: 300, maxWidth: 360, marginTop: 10 }} />
    
    </div>
  );
}
