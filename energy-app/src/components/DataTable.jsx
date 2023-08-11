import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CSVLink } from "react-csv";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "value", headerName: "Valor", width: 90 },
  { field: "percentage", headerName: "Porcentaje", width: 90 },
  {
    field: "date",
    headerName: "Fecha",
    width: 160,
  },
];

export default function DataTableComponent({ filteredData }) {
  const rows = filteredData?.data.map((elem, index) => {
    return {
      id: index,
      value: elem.value,
      percentage: elem.percentage,
      date: elem.datetime.split("T")[0],
    };
  });

  const csvData = rows.map((row) => ({
    ID: row.id,
    Valor: row.value,
    Porcentaje: row.percentage,
    Fecha: row.date,
  }));

  const customLocaleText = {
    noRowsLabel: "No hay filas",
    toolbarColumns: "Columnas",
    toolbarFilters: "Filtrar",
    toolbarDensity: "Densidad",
    toolbarDensityCompact: "Compacta",
    toolbarDensityStandard: "Estándar",
    toolbarDensityComfortable: "Cómoda",
    toolbarExport: "Exportar",
    toolbarExportPrint: "Imprimir",
    toolbarExportCSV: "Descargar como CSV",
    toolbarExportPDF: "Descargar como PDF",
    toolbarSelection: "{0} fila(s) seleccionadas",
    toolbarSelectionRemove: "Eliminar selección",
    toolbarSelectionAll: "Seleccionar todo",
    paginationRowsPerPage: "Filas por página:",
    paginationDisplayRows: "de",
    paginationOf: "de",
    columnMenuLabel: "Menú",
    columnMenuShowColumns: "Mostrar columnas",
    columnMenuFilter: "Filtrar",
    columnMenuHideColumn: "Ocultar columna",
    columnMenuManageColumns: "Manejar columnas",
    columnMenuUnsort: "Quitar orden",
    columnMenuSortAsc: "Ordenar ascendente",
    columnMenuSortDesc: "Ordenar descendente",
    columnMenuNoSort: "No ordenar",
    columnMenuColumns: "Columnas",
    columnMenuGroup: "Agrupar",
    columnMenuUngroup: "Desagrupar",
    columnMenuMoveLeft: "Mover a la izquierda",
    columnMenuMoveRight: "Mover a la derecha",
    columnMenuResetColumns: "Restablecer columnas",
    columnMenuPin: "Fijar",
    columnMenuPinLeft: "Fijar a la izquierda",
    columnMenuPinRight: "Fijar a la derecha",
    columnMenuUnpin: "Desfijar",
    columnMenuAll: "Todo",
    columnMenuFilterRows: "Filtrar filas",
    columnMenuFilterColumns: "Filtrar columnas",
    columnMenuFilterAll: "Todo",
    columnMenuFilters: "Filtros",
    columnMenuAggregates: "Agregados",
    columnMenuAggregatesCount: "Recuento",
    columnMenuAggregatesSum: "Suma",
    columnMenuAggregatesAvg: "Promedio",
    columnMenuAggregatesMin: "Mínimo",
    columnMenuAggregatesMax: "Máximo",
    columnMenuAggregatesFirst: "Primero",
    columnMenuAggregatesLast: "Último",
    columnMenuAggregatesValues: "Valores",
    columnMenuAggregatesSumPre: "Suma de",
    columnMenuAggregatesMinPre: "Mínimo de",
    columnMenuAggregatesMaxPre: "Máximo de",
    columnMenuAggregatesAvgPre: "Promedio de",
    columnMenuAggregatesFirstPre: "Primero de",
    columnMenuAggregatesLastPre: "Último de",
    columnMenuAggregatesFiltered: "Filtrado",
    columnMenuAggregatesRemove: "Eliminar agregado",
    columnMenuGroupBy: "Agrupar por",
    columnMenuUngroupBy: "Desagrupar por",
    columnMenuGroupByAll: "Todo",
    columnMenuGroupByNone: "Ninguno",
    columnMenuGroupBySelected: "Seleccionado",
    columnMenuGroupByAbove: "Arriba",
    columnMenuGroupByBelow: "Abajo",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        margin: "20px",
        typography: "body1",
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        maxWidth: "90%",
        maxHeight: "700px",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        style={{
          marginBottom: "10px",
          backgroundColor: "#379cf4",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        <CSVLink
          data={csvData}
          filename="data.csv"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Exportar a CSV
        </CSVLink>
      </Button>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          localeText={customLocaleText}
        />
      </div>
    </Box>
  );
}
