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
    width: 250,
    height: 500,
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

const ProductPDF = ({ product , base64Image}) => (
  <Document>
   <Page size="A4" style={styles.page}>
  {/* Product Image */}
  {product?.image?.[0] && <Image src={base64Image} style={styles.image} />}

  {/* Product Name Section */}
  <View style={styles.section}>
    <Text style={styles.subtitle}>Product Name</Text>
    <Text style={styles.title}>
      {product.category?.[0] || 'N/A'} - {product.tag?.[0] || 'N/A'} - {product.name || 'N/A'}
    </Text>
  </View>

  {/* Product Details Table */}
  <View style={styles.table}>

    <View style={styles.row}>
      <Text style={styles.cellLabel}>Product Code :</Text>
      <Text style={styles.cellValue}>{product.sku || 'N/A'}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.cellLabel}>Product Category :</Text>
      <Text style={styles.cellValue}>{product.category?.join(', ') || 'N/A'}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.cellLabel}>Product Sub Category :</Text>
      <Text style={styles.cellValue}>{product.subCategory?.join(', ') || 'N/A'}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.cellLabel}>Product Finish :</Text>
      <Text style={styles.cellValue}>{product.finish?.join(', ') || 'N/A'}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.cellLabel}>Thickness (mm):</Text>
      <Text style={styles.cellValue}>{product.thickness || 'N/A'}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.cellLabel}>Product Dimension (ft):</Text>
      <Text style={styles.cellValue}>{product.size || 'N/A'}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.cellLabel}>Weight (mm):</Text>
      <Text style={styles.cellValue}>{product.width?.trim() || 'N/A'}</Text>
    </View>


  </View>
</Page>

  </Document>
);

export default ProductPDF;
