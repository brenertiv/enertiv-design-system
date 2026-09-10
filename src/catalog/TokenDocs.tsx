import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useCatalogTheme } from "./CatalogThemeContext";
import {
  BORDER_RADIUS,
  PRIMITIVES,
  SEMANTIC_DARK,
  SEMANTIC_LIGHT,
  SHADOWS,
  SPACING_SCALE,
  TYPOGRAPHY_TOKENS,
} from "../theme/tokens";

function Swatch({ name, value }: { name: string; value: string }) {
  const isColor = value.startsWith("#") || value.startsWith("rgb");
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
      {isColor ? (
        <Box
          sx={{
            width: 36,
            height: 36,
            flexShrink: 0,
            borderRadius: 0.5,
            bgcolor: value,
            border: 1,
            borderColor: "divider",
          }}
        />
      ) : null}
      <Box sx={{ minWidth: 0 }}>
        <Typography variant="caption" display="block" sx={{ fontFamily: "monospace" }}>
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: "monospace" }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

function Ramp({ title, entries }: { title: string; entries: Record<string, string> }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 1.5,
        }}
      >
        {Object.entries(entries).map(([k, v]) => (
          <Swatch key={k} name={k} value={v} />
        ))}
      </Box>
    </Box>
  );
}

function flattenSemantic(
  obj: Record<string, unknown>,
  prefix = "",
): { name: string; value: string }[] {
  const rows: { name: string; value: string }[] = [];
  for (const [key, val] of Object.entries(obj)) {
    const name = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === "object") {
      rows.push(...flattenSemantic(val as Record<string, unknown>, name));
    } else {
      rows.push({ name, value: String(val) });
    }
  }
  return rows;
}

export function TokenDocs() {
  const { mode } = useCatalogTheme();
  const semantic = mode === "light" ? SEMANTIC_LIGHT : SEMANTIC_DARK;

  return (
    <Stack spacing={1}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>Primitives</AccordionSummary>
        <AccordionDetails>
          <Ramp title="neutral" entries={{ ...PRIMITIVES.neutral }} />
          <Ramp title="navy" entries={{ ...PRIMITIVES.navy }} />
          <Ramp title="brand" entries={{ ...PRIMITIVES.brand }} />
          <Ramp title="action" entries={{ ...PRIMITIVES.action }} />
          <Ramp title="red" entries={{ ...PRIMITIVES.red }} />
          <Ramp title="green" entries={{ ...PRIMITIVES.green }} />
          <Ramp title="orange" entries={{ ...PRIMITIVES.orange }} />
          <Ramp title="yellow" entries={{ ...PRIMITIVES.yellow }} />
          <Ramp title="indigo" entries={{ ...PRIMITIVES.indigo }} />
          <Ramp title="utility" entries={{ ...PRIMITIVES.utility }} />
          <Ramp title="utilityDark" entries={{ ...PRIMITIVES.utilityDark }} />
          <Ramp
            title="chart"
            entries={Object.fromEntries(
              Object.entries(PRIMITIVES.chart).map(([k, v]) => [String(k), v]),
            )}
          />
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            chartA11y
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 1.5,
            }}
          >
            {Object.entries(PRIMITIVES.chartA11y).map(([hue, pair]) => (
              <Box key={hue}>
                <Typography variant="caption">{hue}</Typography>
                <Swatch name="light" value={pair.light} />
                <Swatch name="dark" value={pair.dark} />
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Semantic ({mode})
        </AccordionSummary>
        <AccordionDetails>
          {Object.entries(semantic).map(([group, value]) => (
            <Ramp
              key={group}
              title={group}
              entries={Object.fromEntries(
                flattenSemantic(value as Record<string, unknown>).map((r) => [r.name, r.value]),
              )}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>Typography</AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: TYPOGRAPHY_TOKENS.fontFamily.sans, mb: 1 }}>
            sans — {TYPOGRAPHY_TOKENS.fontFamily.sans}
          </Typography>
          <Typography sx={{ fontFamily: TYPOGRAPHY_TOKENS.fontFamily.mono, mb: 2 }}>
            mono — {TYPOGRAPHY_TOKENS.fontFamily.mono}
          </Typography>
          <Stack spacing={1}>
            {Object.entries(TYPOGRAPHY_TOKENS.fontSize).map(([k, v]) => (
              <Typography key={k} sx={{ fontSize: v, lineHeight: TYPOGRAPHY_TOKENS.lineHeight.tight }}>
                {k} ({v}) The building used 128,400 kWh
              </Typography>
            ))}
          </Stack>
          <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
            {Object.entries(TYPOGRAPHY_TOKENS.fontWeight).map(([k, v]) => (
              <Typography key={k} sx={{ fontWeight: v }}>
                {k} {v}
              </Typography>
            ))}
          </Stack>
          <Stack spacing={1} sx={{ mt: 3 }}>
            {Object.entries(TYPOGRAPHY_TOKENS.lineHeight).map(([k, v]) => (
              <Typography key={k} sx={{ lineHeight: v, maxWidth: 480 }}>
                {k} ({v}) Line height specimen for operational notes and helper copy.
              </Typography>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>Spacing</AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            {Object.entries(SPACING_SCALE).map(([k, v]) => (
              <Box key={k} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="caption" sx={{ width: 72, fontFamily: "monospace" }}>
                  {k} · {v}px
                </Typography>
                <Box sx={{ height: 12, width: v, bgcolor: "primary.main", borderRadius: 0.5 }} />
              </Box>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>Radius</AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {Object.entries(BORDER_RADIUS).map(([k, v]) => (
              <Box key={k} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    border: 1,
                    borderColor: "primary.main",
                    borderRadius: k === "full" ? "9999px" : `${v}px`,
                    bgcolor: "background.paper",
                  }}
                />
                <Typography variant="caption">
                  {k} {v}
                </Typography>
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>Elevation</AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {Object.entries(SHADOWS).map(([k, v]) => (
              <Box
                key={k}
                sx={{
                  width: 140,
                  height: 88,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "background.paper",
                  boxShadow: v,
                  borderRadius: 1,
                }}
              >
                <Typography variant="caption">{k}</Typography>
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
