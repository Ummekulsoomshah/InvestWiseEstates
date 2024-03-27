import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import Listing from "pages/Listing";
import ListingMapView from "pages/ListingMapView";
import PropertyDetails from "pages/PropertyDetails";
import ContactPage from "pages/ContactPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "listing",
      element: <Listing />,
    },
    {
      path: "listingmapview",
      element: <ListingMapView />,
    },
    {
      path: "propertydetails",
      element: <PropertyDetails />,
    },
    {
      path: "contactpage",
      element: <ContactPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
