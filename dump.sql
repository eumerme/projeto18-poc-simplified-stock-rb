--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    "categoryId" integer,
    name text NOT NULL,
    quantity integer NOT NULL
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: sold; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sold (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: sold_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sold_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sold_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sold_id_seq OWNED BY public.sold.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: sold id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sold ALTER COLUMN id SET DEFAULT nextval('public.sold_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (1, 'brinco');
INSERT INTO public.categories VALUES (2, 'anel');
INSERT INTO public.categories VALUES (3, 'colar');
INSERT INTO public.categories VALUES (4, 'pulseira');
INSERT INTO public.categories VALUES (5, 'quadro');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products VALUES (1, 1, 'lua', 1);
INSERT INTO public.products VALUES (2, 1, 'constelação natalina', 1);
INSERT INTO public.products VALUES (3, 1, 'estrela vermelha', 2);
INSERT INTO public.products VALUES (4, 1, 'estrela glitter vermelha', 1);
INSERT INTO public.products VALUES (5, 1, 'estrela vermelha pequena', 2);
INSERT INTO public.products VALUES (6, 1, 'glitter estrela verde', 1);
INSERT INTO public.products VALUES (7, 1, 'cobra glitter', 1);
INSERT INTO public.products VALUES (8, 1, 'gota rosa', 1);
INSERT INTO public.products VALUES (9, 1, 'cobra floral com pétalas de flores vermelhas', 0);
INSERT INTO public.products VALUES (10, 1, 'cobra floral preta com flores de cenoura', 0);
INSERT INTO public.products VALUES (11, 1, 'cobra coral coração', 0);
INSERT INTO public.products VALUES (12, 1, 'coração arruda', 0);
INSERT INTO public.products VALUES (13, 1, 'mãos com renda portuguesa', 0);
INSERT INTO public.products VALUES (14, 1, 'líquens', 0);
INSERT INTO public.products VALUES (15, 1, 'estrela cadente com flor de erica em aço inoxidável', 0);
INSERT INTO public.products VALUES (16, 1, 'estrela olho de tigre em aço inoxidável', 0);
INSERT INTO public.products VALUES (17, 1, 'glitter abelhinha', 0);
INSERT INTO public.products VALUES (18, 1, 'solar glitter', 0);
INSERT INTO public.products VALUES (19, 1, 'estrela glitter prateado', 1);
INSERT INTO public.products VALUES (20, 1, 'lua glitter prateado', 1);
INSERT INTO public.products VALUES (21, 1, 'coração glitter prateado', 1);
INSERT INTO public.products VALUES (22, 1, 'bola glitter prateado', 1);
INSERT INTO public.products VALUES (23, 1, 'margaridas', 0);
INSERT INTO public.products VALUES (24, 2, 'hortênsia regulável', 1);
INSERT INTO public.products VALUES (25, 2, 'florzinha vermelha regulável', 0);
INSERT INTO public.products VALUES (26, 2, 'viuvinha', 0);
INSERT INTO public.products VALUES (27, 2, 'capim regulável', 1);
INSERT INTO public.products VALUES (28, 2, 'florzinha vermelha redondo regulável', 0);
INSERT INTO public.products VALUES (29, 2, 'lavanda com fundo preto', 0);
INSERT INTO public.products VALUES (30, 2, 'renda portuguesa regulável', 0);
INSERT INTO public.products VALUES (31, 2, 'erica regulável', 0);
INSERT INTO public.products VALUES (32, 2, 'metal hortênsias', 0);
INSERT INTO public.products VALUES (33, 2, 'besourinho verde', 0);
INSERT INTO public.products VALUES (34, 2, 'samambaia regulável', 1);
INSERT INTO public.products VALUES (35, 2, 'coração glitter verde', 0);
INSERT INTO public.products VALUES (36, 2, 'renda portuguesa pequeno', 0);
INSERT INTO public.products VALUES (37, 2, 'camomila regulável', 0);
INSERT INTO public.products VALUES (38, 2, 'besourinho regulável', 1);
INSERT INTO public.products VALUES (39, 2, 'coração glitter regulável', 1);
INSERT INTO public.products VALUES (40, 2, 'lavanda regulável', 1);
INSERT INTO public.products VALUES (41, 2, 'estrela vermelha regulável', 1);
INSERT INTO public.products VALUES (42, 2, 'estrela do mar metal bronze', 1);
INSERT INTO public.products VALUES (43, 2, 'triângulo lavanda', 1);
INSERT INTO public.products VALUES (44, 3, 'borboleta', 1);
INSERT INTO public.products VALUES (45, 3, 'elementos', 1);
INSERT INTO public.products VALUES (46, 3, 'elementos caracol', 1);
INSERT INTO public.products VALUES (47, 3, 'flor roxa', 1);
INSERT INTO public.products VALUES (48, 3, 'miçangas flor amarela', 1);
INSERT INTO public.products VALUES (49, 3, 'orquídea chocolate', 1);
INSERT INTO public.products VALUES (50, 3, 'dente de leão fundo preto', 1);
INSERT INTO public.products VALUES (51, 3, 'orquídea estrela', 1);
INSERT INTO public.products VALUES (52, 3, 'arruda', 0);
INSERT INTO public.products VALUES (53, 3, 'moranguinho com samamnbaia', 0);
INSERT INTO public.products VALUES (54, 3, 'miçangas flor de trevo', 1);
INSERT INTO public.products VALUES (55, 3, 'borboleta amarela', 1);
INSERT INTO public.products VALUES (56, 3, 'cogumelo e líquen', 0);
INSERT INTO public.products VALUES (57, 3, 'érica com pingente de madeira', 1);
INSERT INTO public.products VALUES (58, 3, 'besouro', 0);
INSERT INTO public.products VALUES (59, 3, 'orquídea em formato orgânico', 1);
INSERT INTO public.products VALUES (60, 3, 'cristal urucum', 0);
INSERT INTO public.products VALUES (61, 3, 'chocker alecrim', 0);
INSERT INTO public.products VALUES (62, 3, 'iris', 0);
INSERT INTO public.products VALUES (63, 3, 'musguinho', 0);
INSERT INTO public.products VALUES (64, 3, 'cosmos', 0);
INSERT INTO public.products VALUES (65, 3, 'asinha de cigarra', 0);
INSERT INTO public.products VALUES (66, 3, 'chocker miçangas borboleta', 0);
INSERT INTO public.products VALUES (67, 3, 'colar cigarra', 0);
INSERT INTO public.products VALUES (68, 3, 'chocker miçangas cogumelos', 0);
INSERT INTO public.products VALUES (69, 4, 'samambaia pétalas de lavanda francesa', 1);
INSERT INTO public.products VALUES (70, 4, 'pulseira arruda com avenca', 1);
INSERT INTO public.products VALUES (71, 4, 'samambaia fundo creme', 0);
INSERT INTO public.products VALUES (76, 5, 'calmaria, com orquídea, samamvaia e galhinhos', 0);
INSERT INTO public.products VALUES (72, 4, 'dente de leão', 1);
INSERT INTO public.products VALUES (73, 5, 'vôo', 1);
INSERT INTO public.products VALUES (74, 5, 'colméia', 1);
INSERT INTO public.products VALUES (75, 5, 'orquídea rosa amarelada', 1);
INSERT INTO public.products VALUES (77, 5, 'polinizar com flor de pau brasil, pétala de girassol e samambaia', 0);


--
-- Data for Name: sold; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sold VALUES (1, 'cobra floral com pétalas de flores vermelhas');
INSERT INTO public.sold VALUES (2, 'cobra floral preta com flores de cenoura');
INSERT INTO public.sold VALUES (3, 'cobra coral coração');
INSERT INTO public.sold VALUES (4, 'coração arruda');
INSERT INTO public.sold VALUES (5, 'mãos com renda portuguesa');
INSERT INTO public.sold VALUES (6, 'líquens');
INSERT INTO public.sold VALUES (7, 'estrela cadente com flor de erica em aço inoxidável');
INSERT INTO public.sold VALUES (8, 'estrela olho de tigre em aço inoxidável');
INSERT INTO public.sold VALUES (9, 'glitter abelhinha');
INSERT INTO public.sold VALUES (10, 'solar glitter');
INSERT INTO public.sold VALUES (11, 'margaridas');
INSERT INTO public.sold VALUES (12, 'florzinha vermelha regulável');
INSERT INTO public.sold VALUES (13, 'viuvinha');
INSERT INTO public.sold VALUES (14, 'florzinha vermelha redondo regulável');
INSERT INTO public.sold VALUES (15, 'lavanda com fundo preto');
INSERT INTO public.sold VALUES (16, 'renda portuguesa regulável');
INSERT INTO public.sold VALUES (17, 'erica regulável');
INSERT INTO public.sold VALUES (18, 'metal hortênsias');
INSERT INTO public.sold VALUES (19, 'besourinho verde');
INSERT INTO public.sold VALUES (20, 'coração glitter verde');
INSERT INTO public.sold VALUES (21, 'renda portuguesa pequeno');
INSERT INTO public.sold VALUES (22, 'camomila regulável');
INSERT INTO public.sold VALUES (23, 'arruda');
INSERT INTO public.sold VALUES (24, 'moranguinho com samamnbaia');
INSERT INTO public.sold VALUES (25, 'cogumelo e líquen');
INSERT INTO public.sold VALUES (26, 'besouro');
INSERT INTO public.sold VALUES (27, 'cristal urucum');
INSERT INTO public.sold VALUES (28, 'chocker alecrim');
INSERT INTO public.sold VALUES (29, 'iris');
INSERT INTO public.sold VALUES (30, 'musguinho');
INSERT INTO public.sold VALUES (31, 'cosmos');
INSERT INTO public.sold VALUES (32, 'asinha de cigarra');
INSERT INTO public.sold VALUES (33, 'chocker miçangas borboleta');
INSERT INTO public.sold VALUES (34, 'colar cigarra');
INSERT INTO public.sold VALUES (35, 'chocker miçangas cogumelos');
INSERT INTO public.sold VALUES (36, 'samambaia fundo creme');
INSERT INTO public.sold VALUES (37, 'dente de leão');
INSERT INTO public.sold VALUES (38, 'calmaria, com orquídea, samamvaia e galhinhos');
INSERT INTO public.sold VALUES (39, 'polinizar com flor de pau brasil, pétala de girassol e samambaia');


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 5, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 77, true);


--
-- Name: sold_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sold_id_seq', 39, true);


--
-- Name: categories categories_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: products products_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: sold sold_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sold
    ADD CONSTRAINT sold_pkey PRIMARY KEY (id);


--
-- Name: products products_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- PostgreSQL database dump complete
--

