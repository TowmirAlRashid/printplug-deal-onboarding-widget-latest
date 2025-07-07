import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

const GarmentSecondaryBranchForm = ({
  index,
  branchIndex,
  secBranchIndex,
  options,
  productName,
}) => {
  const { control } = useFormContext();

  const colorChange = useWatch({
    control,
    name: `products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.colorChange`,
  });

  return (
    <Box sx={{ width: "95%", mb: 2, float: "right" }}>
      <Typography
        variant="p"
        sx={{
          pb: "1rem",
          fontSize: "0.9rem",
          fontWeight: "bold",
          display: "block",
        }}
      >
        {`Graphic ${secBranchIndex + 1}`}
      </Typography>

      <Controller
        control={control}
        name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.graphicDescription`}
        defaultValue=""
        render={({ field }) => (
          <TextField
            multiline
            rows={3}
            size="small"
            id="graphicDescription"
            variant="outlined"
            fullWidth
            label="Graphic Description"
            {...field}
            sx={{ mb: "1rem", mt: "5px" }}
          />
        )}
      />

      <Box>
        <Controller
          name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.isGraphicPrintReady`}
          control={control}
          defaultValue={false} // Set the default value of the checkbox
          render={({ field }) => (
            <FormGroup>
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="Is Graphic Print Ready?"
              />
            </FormGroup>
          )}
        />
      </Box>

      <Controller
        control={control}
        name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.currentGraphicFormat`}
        defaultValue=""
        render={({ field }) => (
          <TextField
            size="small"
            id="currentGraphicFormat"
            variant="outlined"
            fullWidth
            label="Current Graphic Format"
            {...field}
            sx={{ mb: "1rem", mt: "5px" }}
          />
        )}
      />

      <Box>
        <Controller
          name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.upchargeAcknowledged`}
          control={control}
          defaultValue={false} // Set the default value of the checkbox
          render={({ field }) => (
            <FormGroup>
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="Upcharge Acknowledged?"
              />
            </FormGroup>
          )}
        />
      </Box>

      <Controller
        control={control}
        name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.numberOfColorsUsed`}
        defaultValue=""
        render={({ field }) => (
          <TextField
            size="small"
            id="numberOfColorsUsed"
            variant="outlined"
            fullWidth
            label="Number Of Colors Used"
            {...field}
            sx={{ mb: "1rem", mt: "5px" }}
          />
        )}
      />

      <Controller
        control={control}
        name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.colorsUsed`}
        defaultValue=""
        render={({ field }) => (
          <TextField
            multiline
            rows={3}
            size="small"
            id="colorsUsed"
            variant="outlined"
            fullWidth
            label="Colors Used"
            {...field}
            sx={{ mb: "1rem", mt: "5px" }}
          />
        )}
      />

      <Controller
        control={control}
        name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.colorChange`}
        defaultValue=""
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={["Yes", "No"]}
            value={field.value || ""}
            onChange={(e, newValue) => field.onChange(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Color Change?"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ mb: "1rem", mt: "5px" }}
              />
            )}
          />
        )}
      />

      {colorChange === "Yes" && (
        <Controller
          control={control}
          name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.detailsOfColorChange`}
          defaultValue=""
          render={({ field }) => (
            <TextField
              multiline
              rows={3}
              size="small"
              id="detailsOfColorChange"
              variant="outlined"
              fullWidth
              label="Please Provide Details Of Color Change"
              {...field}
              sx={{ mb: "1rem", mt: "5px" }}
            />
          )}
        />
      )}

      <Controller
        control={control}
        name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.fontsUsed`}
        defaultValue=""
        render={({ field }) => (
          <TextField
            multiline
            rows={3}
            size="small"
            id="fontsUsed"
            variant="outlined"
            fullWidth
            label="Fonts Used"
            {...field}
            sx={{ mb: "1rem", mt: "5px" }}
          />
        )}
      />

      <Controller
        control={control}
        name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.placements`}
        defaultValue=""
        render={({ field }) => (
          <TextField
            multiline
            rows={3}
            size="small"
            id="placements"
            variant="outlined"
            fullWidth
            label="Placement(s)"
            {...field}
            sx={{ mb: "1rem", mt: "5px" }}
          />
        )}
      />

      <Controller
        control={control}
        name={`products.${index}.primaryBranches.${branchIndex}.secondaryBranches.${secBranchIndex}.sizeAndDimension`}
        defaultValue=""
        render={({ field }) => (
          <TextField
            multiline
            rows={3}
            size="small"
            id="sizeAndDimension"
            variant="outlined"
            fullWidth
            label="Size(s) & Dimension(s)"
            {...field}
            sx={{ mb: "1rem", mt: "5px" }}
          />
        )}
      />
    </Box>
  );
};

export default GarmentSecondaryBranchForm;
