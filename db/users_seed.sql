--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 15.1

-- Started on 2023-02-15 10:51:44

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3318 (class 0 OID 17048)
-- Dependencies: 210
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, sessionid, "timestamp") FROM stdin;
91	ada	0scvTwyXJ-n2t-Ca8hNuyS6ShGpuCJha	2023-02-15 02:50:02.225
238	hector	Ngp1IyxnzrPKHjDBpRCyrOlYVz5sfgjA	2023-02-15 05:39:05.451
10	sds	kIocs96ssqXObhez-beBRSAInxqj3iB9	2023-02-08 19:54:01.206
53	dfg	fFfxmrS-dzIgqTqPH_sD2DSaWTeyVGrb	2023-02-08 19:56:50.279
84		fFfxmrS-dzIgqTqPH_sD2DSaWTeyVGrb	2023-02-08 20:16:47.362
86	aa	fFfxmrS-dzIgqTqPH_sD2DSaWTeyVGrb	2023-02-09 01:41:59.257
87	ds	fc5w4P5RpW6OIZnFvqLs4EMvIjF-olpZ	2023-02-09 15:38:52.429
88	ads		2023-02-10 13:06:05.356
1	fds	LJBgDlh6HkzcMx4deRFI7PMXu4hjtf3O	2023-02-08 19:46:36.07
51	dfs	O5z1e8GKda6z6Jt8bv-f6lLwxJy3btT8	2023-02-08 19:48:55.729
236	super		2023-02-14 00:11:27.811
\.


--
-- TOC entry 3324 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 248, true);


-- Completed on 2023-02-15 10:51:51

--
-- PostgreSQL database dump complete
--

