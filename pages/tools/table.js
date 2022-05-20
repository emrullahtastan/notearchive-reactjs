import * as React from 'react';
import PropTypes from 'prop-types';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import {PromptContext, useContext} from "./../contexts/PromptContext";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#e0f2f1",
        color: theme.palette.common.black,
        fontWeight: "bold"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function TablePaginationActions(props) {


    const theme = useTheme();
    const {count, page, rowsPerPage, onPageChange} = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{flexShrink: 0, ml: 2.5}}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(eser, makam, gufte, beste, form) {
    return {
        eser,
        makam,
        gufte,
        beste,
        form,
    };
}

const rows = [
    createData('A Dostlar Ne Mutlu Size', "Uşşak", "Ahmet Soyyiğit", "Yahya Soyyiğit", "İlahi"),
    createData('A dost sen de gel de bize dost ol', "Acemaşiran", "Şeref Çakar", "Ayşe Feyzioğlu", "Şarkı"),
    createData('3 Aç Gözün Gafletden Uyan', "Acemaşiran", "Cüneyt Kosal", "Aziz Mahmud Hüdai", "İlahi"),
    createData('4 Aç Gözün Gafletden Uyan', "Acemaşiran", "Cüneyt Kosal", "Aziz Mahmud Hüdai", "İlahi"),
    createData('5 Aç Gözün Gafletden Uyan', "Acemaşiran", "Cüneyt Kosal", "Aziz Mahmud Hüdai", "İlahi"),
    createData('6 ç Gözün Gafletden Uyan', "Acemaşiran", "Cüneyt Kosal", "Aziz Mahmud Hüdai", "İlahi"),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
    const {prompt, setPrompt} = useContext(PromptContext);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClickOpen = () => {
        let obj = {...prompt};
        obj.visible = true;
        setPrompt(obj);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 500}} aria-label="customized custom pagination table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Eser Başlığı</StyledTableCell>
                        <StyledTableCell>Makam</StyledTableCell>
                        <StyledTableCell>Güfte</StyledTableCell>
                        <StyledTableCell>Beste</StyledTableCell>
                        <StyledTableCell>Form</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                    ).map((row, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                <div style={{width: 'fit-content', cursor: 'pointer'}}
                                     onClick={handleClickOpen}>{row.eser}</div>
                            </TableCell>
                            <TableCell style={{width: 160}}>
                                {row.makam}
                            </TableCell>
                            <TableCell style={{width: 160}}>
                                {row.gufte}
                            </TableCell>
                            <TableCell style={{width: 160}}>
                                {row.beste}
                            </TableCell>
                            <TableCell style={{width: 160}}>
                                {row.form}
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{height: 53 * emptyRows}}>
                            <TableCell colSpan={6}/>
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, {label: 'Hepsi', value: -1}]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'sayfa başına satır',
                                },
                                native: true,
                            }}
                            labelRowsPerPage={"Sayfa başına satır"}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
