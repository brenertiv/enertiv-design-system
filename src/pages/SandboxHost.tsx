import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { type ComponentType, Suspense, lazy } from "react";
import { CatalogErrorBoundary } from "../catalog/CatalogErrorBoundary";

const GroupColors = lazy(() =>
  import("pages/Sandbox/components/GroupColors").then((m) => ({ default: m.GroupColors })),
);
const GroupTypography = lazy(() =>
  import("pages/Sandbox/components/GroupTypography").then((m) => ({
    default: m.GroupTypography,
  })),
);
const GroupSpacing = lazy(() =>
  import("pages/Sandbox/components/GroupSpacing").then((m) => ({ default: m.GroupSpacing })),
);
const GroupIcons = lazy(() =>
  import("pages/Sandbox/components/GroupIcons").then((m) => ({ default: m.GroupIcons })),
);
const GroupNavigation = lazy(() =>
  import("pages/Sandbox/components/GroupNavigation").then((m) => ({
    default: m.GroupNavigation,
  })),
);
const DesignSystemComponents = lazy(() =>
  import("pages/Sandbox/components/DesignSystemComponents").then((m) => ({
    default: m.DesignSystemComponents,
  })),
);
const GroupInputs = lazy(() =>
  import("pages/Sandbox/components/GroupInputs").then((m) => ({ default: m.GroupInputs })),
);
const GroupCards = lazy(() =>
  import("pages/Sandbox/components/GroupCards").then((m) => ({ default: m.GroupCards })),
);
const GroupDataDisplay = lazy(() =>
  import("pages/Sandbox/components/GroupDataDisplay").then((m) => ({
    default: m.GroupDataDisplay,
  })),
);
const GroupCharts = lazy(() =>
  import("pages/Sandbox/components/GroupCharts").then((m) => ({ default: m.GroupCharts })),
);
const GroupComplex = lazy(() =>
  import("pages/Sandbox/components/GroupComplex").then((m) => ({ default: m.GroupComplex })),
);
const GroupHtml = lazy(() =>
  import("pages/Sandbox/components/GroupHtml").then((m) => ({ default: m.GroupHtml })),
);
const EntityLayoutTest = lazy(() =>
  import("pages/Sandbox/components/EntityLayoutTest").then((m) => ({
    default: m.EntityLayoutTest,
  })),
);
const MapThemeTest = lazy(() =>
  import("pages/Sandbox/MapThemeTest").then((m) => ({ default: m.MapThemeTest })),
);
const CrossFilterTest = lazy(() =>
  import("pages/Sandbox/CrossFilterTest").then((m) => ({ default: m.CrossFilterTest })),
);
const HierarchyView = lazy(() =>
  import("pages/Sandbox/HierarchyView").then((m) => ({ default: m.HierarchyView })),
);
const GroupCleanup = lazy(() =>
  import("pages/Sandbox/components/GroupCleanup").then((m) => ({ default: m.GroupCleanup })),
);
const GroupSimple = lazy(() =>
  import("pages/Sandbox/components/GroupSimple").then((m) => ({ default: m.GroupSimple })),
);

const PAGES: Record<string, ComponentType> = {
  colors: GroupColors,
  typography: GroupTypography,
  spacing: GroupSpacing,
  icons: GroupIcons,
  navigation: GroupNavigation,
  layouts: DesignSystemComponents,
  inputs: GroupInputs,
  cards: GroupCards,
  "data-display": GroupDataDisplay,
  charts: GroupCharts,
  complex: GroupComplex,
  "html-blocks": GroupHtml,
  "page-layout": EntityLayoutTest,
  "map-themes": MapThemeTest,
  "cross-filter": CrossFilterTest,
  "object-hierarchy": HierarchyView,
  cleanup: GroupCleanup,
  simple: GroupSimple,
};

export function SandboxHost({ page }: { page: string }) {
  const Page = PAGES[page];
  if (!Page) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="info">
          This section is not in production Sandbox. Nothing was invented for
          it.
        </Alert>
      </Box>
    );
  }
  return (
    <CatalogErrorBoundary key={page}>
      <Suspense
        fallback={
          <Box sx={{ p: 3 }}>
            <Alert severity="info">Loading production Sandbox…</Alert>
          </Box>
        }
      >
        <Box sx={{ p: 3 }}>
          <Page />
        </Box>
      </Suspense>
    </CatalogErrorBoundary>
  );
}
