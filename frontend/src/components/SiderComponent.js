import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BookIcon from '@material-ui/icons/Book';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import ListIcon from '@material-ui/icons/List';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const { Sider } = Layout;

const SiderComponent = () => {
    const classes = useStyles();
    const [openFirst, setOpenFirst] = React.useState(true);
    const [open, setOpen] = React.useState(true);

    let indexUrl = null;
    if (window.location.pathname === '/admin') indexUrl = "/admin";
    else if (window.location.pathname === '/admin/all-book') indexUrl = "/admin/all-book";
    else if (window.location.pathname === '/admin/book-category') indexUrl = "/admin/book-category";
    else if (window.location.pathname === '/admin/book-lending-lent') indexUrl = "/admin/book-lending-lent";
    else if (window.location.pathname === '/admin/book-lending-pending') indexUrl = "/admin/book-lending-pending";
    else if (window.location.pathname === '/admin/users') indexUrl = "/admin/users";

    const [selectedIndex, setSelectedIndex] = React.useState(indexUrl);

    const handleFirstClick = (event, index) => {
        setOpenFirst(!openFirst);
        setSelectedIndex(index);
    };

    const handleClick = (event, index) => {
        setOpen(!open);
        setSelectedIndex(index);
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Sider
            style={{ padding: '0px 0 0 0', background: 'white' }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            width={230}
        >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                <Link style={{ color: 'black' }} to="/admin">
                    <ListItem button
                        selected={selectedIndex === "/admin"}
                        onClick={(event) => handleListItemClick(event, "/admin")}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <ListItem button
                    onClick={(event) => handleFirstClick(event, "book")}
                    selected={selectedIndex === "book"}
                >
                    <ListItemIcon>
                        <CollectionsBookmarkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Book" />
                    {openFirst ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openFirst} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link style={{ color: 'black' }} to="/admin/book-category">
                            <ListItem button className={classes.nested}
                                selected={selectedIndex === "/admin/book-category"}
                                onClick={(event) => handleListItemClick(event, "/admin/book-category")}
                            >
                                <ListItemIcon>
                                    <BookIcon />
                                </ListItemIcon>
                                <ListItemText primary="Category" />
                            </ListItem>
                        </Link>
                        <Link style={{ color: 'black' }} to="/admin/all-book">
                            <ListItem button className={classes.nested}
                                selected={selectedIndex === "/admin/all-book"}
                                onClick={(event) => handleListItemClick(event, "/admin/all-book")}
                            >
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText primary="All books" />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
                <Link style={{ color: 'black' }} to="/admin/users">
                    <ListItem button
                        selected={selectedIndex === "/admin/users"}
                        onClick={(event) => handleListItemClick(event, "/admin/users")}
                    >
                        <ListItemIcon>
                            <AssignmentIndIcon />
                        </ListItemIcon>
                        <ListItemText primary="User" />
                    </ListItem>
                </Link>
                <ListItem button
                    onClick={(event) => handleClick(event, "book-lending")}
                    selected={selectedIndex === "book-lending"}
                >
                    <ListItemIcon>
                        <ImportExportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Book lending" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link style={{ color: 'black' }} to="/admin/book-lending-pending">
                            <ListItem button className={classes.nested}
                                selected={selectedIndex === "/admin/book-lending-pending"}
                                onClick={(event) => handleListItemClick(event, "/admin/book-lending-pending")}
                            >
                                <ListItemIcon>
                                    <HourglassEmptyIcon />
                                </ListItemIcon>
                                <ListItemText primary="Pending" />
                            </ListItem>
                        </Link>
                        <Link style={{ color: 'black' }} to="/admin/book-lending-lent">
                            <ListItem button className={classes.nested}
                                selected={selectedIndex === "/admin/book-lending-lent"}
                                onClick={(event) => handleListItemClick(event, "/admin/book-lending-lent")}
                            >
                                <ListItemIcon>
                                    <LibraryBooksIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lent" />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
            </List>
        </Sider>

    )
};

export default SiderComponent;

