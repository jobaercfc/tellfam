package com.jobaer.tellfam;

import com.jobaer.tellfam.config.AsyncSyncConfiguration;
import com.jobaer.tellfam.config.EmbeddedRedis;
import com.jobaer.tellfam.config.EmbeddedSQL;
import com.jobaer.tellfam.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { TellfamApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedRedis
@EmbeddedSQL
public @interface IntegrationTest {
}
