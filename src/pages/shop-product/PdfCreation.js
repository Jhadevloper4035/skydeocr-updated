import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 600,
    objectFit: "cover",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 8,
  },
  table: {
    marginTop: 10,
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottom: "1px solid #ccc",
  },
  cellLabel: {
    fontWeight: "bold",
    width: "40%",
  },
  cellValue: {
    width: "60%",
  },
});

const ProductPDF = ({ product }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src={product.image[0]} style={styles.image} />

      <View style={styles.section}>
        <Text style={styles.subtitle}>Product Name </Text>
        <Text style={styles.title}> {product.category[0]} - {product.tag[0]} - {product.name}</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellLabel}>Product Category:</Text>
          <Text style={styles.cellValue}>{product.category[0]}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellLabel}>Product Finish:</Text>
          <Text style={styles.cellValue}>{product.tag[0]}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cellLabel}>Design Number:</Text>
          <Text style={styles.cellValue}>10 x 10 x 15 cm</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellLabel}>Finish Name:</Text>
          <Text style={styles.cellValue}>60% cotton, 40% polyester</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellLabel}>Thickness (mm):</Text>
          <Text style={styles.cellValue}>
            American heirloom jean shorts pug selian letterpress
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellLabel}>Dimension (mm):</Text>
          <Text style={styles.cellValue}>60% cotton, 40% polyester</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellLabel}>Dimension (ft):</Text>
          <Text style={styles.cellValue}>60% cotton, 40% polyester</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ProductPDF;
